json.extract! user, :id, :username, :email, :friend_ids
json.friends do 
    user.friends.each do |friend|
        json.set! friend.id do
            json.extract! friend, :id, :username, :email
        end
    end
end
json.expenses do 
    user.expenses.each do |expense|
        json.set! expense.id do
            json.extract! expense, :id, :description, :amount, :split_type, :payer_id, :date_incurred, :expenders
        end
    end
end
