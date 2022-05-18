class Expense < ApplicationRecord
  validates :description, :amount, :split_type, :payer_id, :date_incurred, presence: true
  validates :description, uniqueness: true

  has_many :user_expenses, 
    primary_key: :id, 
    foreign_key: :expense_id, 
    class_name: :UserExpense,
    dependent: :destroy

  has_many :expenders, 
    through: :user_expenses, 
    source: :user
end


