json.user_id @user_id

json.friend do 
   json.extract! @friend, :id, :username, :email, :friend_ids 
end

# {
#     user_id: id,
#     friend: {
#       id: ....,
#       username: ....,
#       email: ....,
#     }
# }

