# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.create([
  {text: "Find Next Number In The Series:\n\n 1, 4, 9, 16, 25, ...", quiz_id: 1, answer: "36", time: 0},
  {text: "Find Next Number In The Series:\n\n 1, 1, 2, 3, 5, ...", quiz_id: 1, answer: "8", time: 0},
  {text: "Find Next Number In The Series:\n\n 3, 6, 11, 18, 27, ...", quiz_id: 1, answer: "38", time: 0},
  {text: "Find Next Number In The Series:\n\n 2, 5, 12, 27, 58, ...",  quiz_id: 1, answer: "121", time: 0},
  {text: "Find Next Number In The Series:\n\n 2, 4, 12, 14, 42, ...", quiz_id: 1, answer: "44", time: 0}
])

p "Created #{Question.count} questions"
