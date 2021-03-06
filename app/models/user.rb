class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token!

  has_many :friendships, 
    primary_key: :id, 
    foreign_key: :user_id, 
    class_name: :Friendship

  has_many :reverse_friendships,
    primary_key: :id, 
    foreign_key: :friend_id, 
    class_name: :Friendship

  has_many :friends, 
    through: :friendships, 
    source: :friend

  has_many :reverse_friends, 
    through: :reverse_friendships, 
    source: :user
  
  has_many :user_expenses, 
    primary_key: :id, 
    foreign_key: :user_id, 
    class_name: :UserExpense

  has_many :expenses, 
    through: :user_expenses, 
    source: :expense

  has_many :comments, 
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :Comment

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= self.class.generate_session_token
  end

end
