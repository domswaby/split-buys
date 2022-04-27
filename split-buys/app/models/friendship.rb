class Friendship < ApplicationRecord

  belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

  belongs_to :friend, 
    primary_key: :id, 
    foreign_key: :friend_id, 
    class_name: :User 

end