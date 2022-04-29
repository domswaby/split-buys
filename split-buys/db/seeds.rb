# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all
User.destroy_all
Friendship.destroy_all

bench1 = Bench.create(description: 'new metal one', lat: 37.782396, lng: -122.431373)
bench2 = Bench.create(description: 'big old wooden one', lat: 37.786355, lng: -122.386357)
bench3 = Bench.create(description: 'tagged metal one', lat: 37.804118, lng: -122.411067)

demo_user = User.create(username: "Demo User", password: "starwars", email: "demo_user@gmail.com")
user1 = User.create(username: "jackson", password: "starwars", email: "jackson@gmail.com")
user2 = User.create(username: "sean", password: "starwars", email: "sean@gmail.com")
user3 = User.create(username: "will", password: "starwars", email: "will@gmail.com")
user4 = User.create(username: "kevin", password: "starwars", email: "kevin@gmail.com")
user5 = User.create(username: "naran", password: "starwars", email: "naran@gmail.com")
user6 = User.create(username: "nick", password: "starwars", email: "nick@gmail.com")
user7 = User.create(username: "janice", password: "starwars", email: "janice@gmail.com")
user8 = User.create(username: "joe", password: "starwars", email: "joe@gmail.com")

# demo_user friendships
Friendship.create(user_id: demo_user.id, friend_id: user2.id) 
Friendship.create(user_id: user2.id, friend_id: demo_user.id) 

Friendship.create(user_id: demo_user.id, friend_id: user3.id) 
Friendship.create(user_id: user3.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user4.id) 
Friendship.create(user_id: user4.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user5.id) 
Friendship.create(user_id: user5.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user6.id) 
Friendship.create(user_id: user6.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user7.id) 
Friendship.create(user_id: user7.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user8.id) 
Friendship.create(user_id: user8.id, friend_id: demo_user.id)

