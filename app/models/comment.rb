class Comment < ApplicationRecord

  belongs_to :author, 
    primary_key: :id, 
    foreign_key: :author_id, 
    class_name: :User  

  belongs_to :expense, 
    primary_key: :id, 
    foreign_key: :expense_id, 
    class_name: :Expense  
    
end