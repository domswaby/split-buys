json.extract! user, :id, :username, :email, :friend_ids
json.friends do 
    user.friends.each do |friend|
        json.set! friend.id do
            json.extract! friend, :id, :username, :email
        end
    end
end
 