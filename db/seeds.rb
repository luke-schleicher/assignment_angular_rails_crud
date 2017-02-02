# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

N = 10
N_NESTED = 4

puts "Cleaning Database"

User.destroy_all
Pin.destroy_all

puts "Creating Users"

N.times do
  User.create(username: Faker::Name.name)
end

puts "Adding pins to each user"

User.all.each do |user|
  N_NESTED.times do |i|
    user.pins.create({
      item: Faker::Hipster.words(2).join(" "),
      description: Faker::Hipster.paragraph,
      buy_sell: (i % 2 == 0)
    })
  end
end

puts "Done"
