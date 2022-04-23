# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

bench1 = Bench.create(description: 'new metal one', lat: 37.782396, lng: -122.431373)
bench2 = Bench.create(description: 'big old wooden one', lat: 37.786355, lng: -122.386357)
bench3 = Bench.create(description: 'tagged metal one', lat: 37.804118, lng: -122.411067)


# $.ajax({
#   url: "/api/benches",
#   method: 'GET'
# }).then(res => console.log(res))