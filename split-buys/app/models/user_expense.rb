class UserExpense < ApplicationRecord

  belongs_to :user, 
    primary_key: :id, 
    foreign_key: :user_id, 
    class_name: :User

  belongs_to :expense, 
    primary_key: :id, 
    foreign_key: :expense_id, 
    class_name: :Expense

end
