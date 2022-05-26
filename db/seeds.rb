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
user8 = User.create(username: "johnny", password: "starwars", email: "johnny@gmail.com")
user9 = User.create(username: "herman", password: "starwars", email: "herman@gmail.com")
user10 = User.create(username: "spencer", password: "starwars", email: "spencer@gmail.com")
user11 = User.create(username: "harry", password: "starwars", email: "harry@gmail.com")
user12 = User.create(username: "derek", password: "starwars", email: "derek@gmail.com")
user13 = User.create(username: "chris", password: "starwars", email: "chris@gmail.com")
user14 = User.create(username: "peter", password: "starwars", email: "peter@gmail.com")
user15 = User.create(username: "jacob", password: "starwars", email: "jacob@gmail.com")
user16 = User.create(username: "joe", password: "starwars", email: "joe@gmail.com")
user17 = User.create(username: "dominic", password: "starwars", email: "dominic@gmail.com")

# demo_user friendships
Friendship.create(user_id: demo_user.id, friend_id: user1.id) 
Friendship.create(user_id: user1.id, friend_id: demo_user.id) 

# Friendship.create(user_id: demo_user.id, friend_id: user2.id) 
# Friendship.create(user_id: user2.id, friend_id: demo_user.id) 

# Friendship.create(user_id: demo_user.id, friend_id: user3.id) 
# Friendship.create(user_id: user3.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user4.id) 
Friendship.create(user_id: user4.id, friend_id: demo_user.id)

# Friendship.create(user_id: demo_user.id, friend_id: user5.id) 
# Friendship.create(user_id: user5.id, friend_id: demo_user.id)

# Friendship.create(user_id: demo_user.id, friend_id: user6.id) 
# Friendship.create(user_id: user6.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user7.id) 
Friendship.create(user_id: user7.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user8.id) 
Friendship.create(user_id: user8.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user9.id) 
Friendship.create(user_id: user9.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user10.id) 
Friendship.create(user_id: user10.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user11.id) 
Friendship.create(user_id: user11.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user12.id) 
Friendship.create(user_id: user12.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user13.id) 
Friendship.create(user_id: user13.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user14.id) 
Friendship.create(user_id: user14.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user15.id) 
Friendship.create(user_id: user15.id, friend_id: demo_user.id)

Friendship.create(user_id: demo_user.id, friend_id: user17.id) 
Friendship.create(user_id: user17.id, friend_id: demo_user.id)

expense1 = Expense.create(description: "party", amount: 160, split_type: "equal", payer_id: user1.id, date_incurred: "2022-04-20" ) 
UserExpense.create(user_id: user1.id, expense_id: expense1.id, balance: 80)
UserExpense.create(user_id: demo_user.id, expense_id: expense1.id, balance: 80)

expense2 = Expense.create(description: "breakfast", amount: 160, split_type: "equal", payer_id: user1.id, date_incurred: "2022-03-10" )
UserExpense.create(user_id: user1.id, expense_id: expense2.id, balance: 80)
UserExpense.create(user_id: demo_user.id, expense_id: expense2.id, balance: 80)

expense3 = Expense.create(description: "lunch", amount: 120, split_type: "equal", payer_id: user3.id, date_incurred: "2022-05-01" ) 
UserExpense.create(user_id: user1.id, expense_id: expense3.id, balance: 40)
UserExpense.create(user_id: demo_user.id, expense_id: expense3.id, balance: 40)
UserExpense.create(user_id: user4.id, expense_id: expense3.id, balance: 40)

expense4 = Expense.create(description: "dinner", amount: 160, split_type: "equal", payer_id: user3.id, date_incurred: "2022-01-23" ) 
UserExpense.create(user_id: user7.id, expense_id: expense4.id, balance: 40)
UserExpense.create(user_id: user8.id, expense_id: expense4.id, balance: 40)
UserExpense.create(user_id: user4.id, expense_id: expense4.id, balance: 40)
UserExpense.create(user_id: demo_user.id, expense_id: expense4.id, balance: 40)

expense5 = Expense.create(description: "birthday", amount: 160, split_type: "equal", payer_id: user3.id, date_incurred: "2022-02-02" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense5.id, balance: 80)
UserExpense.create(user_id: user7.id, expense_id: expense5.id, balance: 80)

expense6 = Expense.create(description: "presents", amount: 150, split_type: "equal", payer_id: user6.id, date_incurred: "2021-02-20" )
UserExpense.create(user_id: demo_user.id, expense_id: expense6.id, balance: 50)
UserExpense.create(user_id: user9.id, expense_id: expense6.id, balance: 50)
UserExpense.create(user_id: user7.id, expense_id: expense6.id, balance: 50)

expense7 = Expense.create(description: "christmas clothes", amount: 300, split_type: "equal", payer_id: user7.id, date_incurred: "2021-04-25" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense7.id, balance: 100)
UserExpense.create(user_id: user7.id, expense_id: expense7.id, balance: 100)
UserExpense.create(user_id: user8.id, expense_id: expense7.id, balance: 100)

expense8 = Expense.create(description: "bootcamp fees", amount: 180, split_type: "equal", payer_id: user8.id, date_incurred: "2022-03-11" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense8.id, balance: 90)
UserExpense.create(user_id: user8.id, expense_id: expense8.id, balance: 90)

expense9 = Expense.create(description: "rent", amount: 280, split_type: "equal", payer_id: user9.id, date_incurred: "2022-02-25" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense9.id, balance: 70)
UserExpense.create(user_id: user9.id, expense_id: expense9.id, balance: 70)
UserExpense.create(user_id: user10.id, expense_id: expense9.id, balance: 70)
UserExpense.create(user_id: user11.id, expense_id: expense9.id, balance: 70)

expense10 = Expense.create(description: "groceries", amount: 50, split_type: "equal", payer_id: user10.id, date_incurred: "2020-03-20" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense10.id, balance: 25)
UserExpense.create(user_id: user10.id, expense_id: expense10.id, balance: 25)

expense11 = Expense.create(description: "movies", amount: 30, split_type: "equal", payer_id: demo_user.id, date_incurred: "2021-03-20" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense11.id, balance: 15)
UserExpense.create(user_id: user12.id, expense_id: expense11.id, balance: 15)

expense12 = Expense.create(description: "golf", amount: 500, split_type: "equal", payer_id: demo_user.id, date_incurred: "2022-03-20" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense12.id, balance: 125)
UserExpense.create(user_id: user13.id, expense_id: expense12.id, balance: 125)
UserExpense.create(user_id: user14.id, expense_id: expense12.id, balance: 125)
UserExpense.create(user_id: user15.id, expense_id: expense12.id, balance: 125)

expense13 = Expense.create(description: "vacation", amount: 2000, split_type: "equal", payer_id: demo_user.id, date_incurred: "2020-07-20" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense13.id, balance: 500)
UserExpense.create(user_id: user14.id, expense_id: expense13.id, balance: 500)
UserExpense.create(user_id: user15.id, expense_id: expense13.id, balance: 500)
UserExpense.create(user_id: user17.id, expense_id: expense13.id, balance: 500)

expense14 = Expense.create(description: "pool party", amount: 800, split_type: "equal", payer_id: demo_user.id, date_incurred: "2020-09-28" ) 
UserExpense.create(user_id: demo_user.id, expense_id: expense14.id, balance: 200)
UserExpense.create(user_id: user12.id, expense_id: expense14.id, balance: 200)
UserExpense.create(user_id: user13.id, expense_id: expense14.id, balance: 200)
UserExpense.create(user_id: user14.id, expense_id: expense14.id, balance: 200)

