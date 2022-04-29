class Expense < ApplicationRecord
  validates :title, :amount, :split_type, :payer_id, :date_incurred, presence: true
  validates :title, uniqueness: true

  has_many :user_expenses, 
    primary_key: :id, 
    foreign_key: :expense_id, 
    class_name: :UserExpense
  has_many :expenders, 
    through: :user_expenses, 
    source: :user




end
