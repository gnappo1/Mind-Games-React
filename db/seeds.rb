# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Quiz.create([{ name: 'Logic I', total_time: 0 }, { name: 'World Capitals', total_time: 0, category: "Geography" }, { name: 'American History', total_time: 0, category: "History" }, { name: 'GK I', total_time: 0, category: "General Knowledge" }])

Question.create([
  {text: "Find Next Number In The Series:\n\n 1, 4, 9, 16, 25, ...", quiz_id: 1, answer: "36", time: 0},
  {text: "Find Next Number In The Series:\n\n 1, 1, 2, 3, 5, ...", quiz_id: 1, answer: "8", time: 0},
  {text: "Find Next Number In The Series:\n\n 3, 6, 11, 18, 27, ...", quiz_id: 1, answer: "38", time: 0},
  {text: "Find Next Number In The Series:\n\n 2, 5, 12, 27, 58, ...",  quiz_id: 1, answer: "121", time: 0},
  {text: "Find Next Number In The Series:\n\n 2, 4, 12, 14, 42, ...", quiz_id: 1, answer: "44", time: 0},
  {text: "Luca likes the number 225 but not 230, likes 900 but not 888, likes 10000 but not 1000. \n What number will Luca like? \n A) 42; B) 8000; C) 169; D) 725; E) None is correct;", quiz_id: 1, answer: "C", points: 3, time: 0},
  {text: "All developers are nerds. Matt loves the woods. Everyone who loves the woods is a nerd. If all the statements are true, which of the following results also true? \n A) Matt is a developer. \n B) Every nerd is a developer. \n C) Every developer loves the woods. \n D) Matt is a nerd. \n E) None of the above. ", quiz_id: 1, answer: "D", points: 3, time: 0},
  {text: "My cousin has a fifteen-year-old brother who is a student. All students will be tested tomorrow. Which of the following statements is therefore correct? \n A) My cousin is not a student. \n B) My cousin will be tested. \n C) My cousin's brother gets always high marks. D) My cousin's brother, fearing the test, won't go to school tomorrow. \n E) None of the above.", quiz_id: 1, answer: "B", points: 3, time: 0},
  {text: "The sum of two positive integers (e.g. 1, 2, 3, ...) is equal to exactly 6 times their difference and their product is 25 times their quotient. What are the numbers? \n A) 3 & 5; B) 6 & 12; C) 5 & 9; D) 7 & 5; E) 8 & 2; ",  quiz_id: 1, answer: "D", points: 3, time: 0},
  {text: "Kim paints an entire wall in 6 hours; Kourtney works twice as fast as Kim; Khloé paints the same wall in 12 hours. How many minutes would it take them to paint the wall if they work together? \n A) 91; B) 103; C) 108; D) 112; E) 118;", quiz_id: 1, answer: "B", points: 3, time: 0},
  {text: "Luca likes the number 225 but not 230, likes 900 but not 888, likes 10000 but not 1000. \n What number will Luca like? \n A) 42; B) 8000; C) 169; D) 725; E) None is correct;", quiz_id: 1, answer: "C", points: 3, time: 0},
  {text: "All developers are nerds. Matt loves the woods. Everyone who loves the woods is a nerd. If all the statements are true, which of the following results also true? \n A) Matt is a developer. \n B) Every nerd is a developer. \n C) Every developer loves the woods. \n D) Matt is a nerd. \n E) None of the above. ", quiz_id: 1, answer: "D", points: 3, time: 0},
  {text: "My cousin has a fifteen-year-old brother who is a student. All students will be tested tomorrow. Which of the following statements is therefore correct? \n A) My cousin is not a student. \n B) My cousin will be tested. \n C) My cousin's brother gets always high marks. D) My cousin's brother, fearing the test, won't go to school tomorrow. \n E) None of the above.", quiz_id: 1, answer: "B", points: 3, time: 0},
  {text: "The sum of two positive integers (e.g. 1, 2, 3, ...) is equal to exactly 6 times their difference and their product is 25 times their quotient. What are the numbers? \n A) 3 & 5; B) 6 & 12; C) 5 & 9; D) 7 & 5; E) 8 & 2; ",  quiz_id: 1, answer: "D", points: 3, time: 0},
  {text: "Kim paints an entire wall in 6 hours; Kourtney works twice as fast as Kim; Khloé paints the same wall in 12 hours. How many minutes would it take them to paint the wall if they work together? \n A) 91; B) 103; C) 108; D) 112; E) 118;", quiz_id: 1, answer: "B", points: 3, time: 0},
  {text: "Which is the missing element?", quiz_id: 1, image_url: "http://www.youmath.it/images/stories/giochi-matematica/test-intelligenza/test-intelligenza-attitudine-spaziale-6.png", answer: "B", points: 5, time: 0},
  {text: "Which is the missing element?", quiz_id: 1, image_url: "http://www.youmath.it/images/stories/giochi-matematica/test-intelligenza/test-intelligenza-attitudine-spaziale-5.png", answer: "A", points: 5, time: 0},
  {text: "Which is the missing element?", quiz_id: 1, image_url: "http://www.youmath.it/images/stories/giochi-matematica/test-intelligenza/figura-mancante-1.png", answer: "B", points: 5, time: 0},
  {text: "Which is the missing element? \n A) 36; B) 12; C) 1; D) 64; E) 16;", quiz_id: 1, image_url: "https://quiz.concorsipubblici.com/sites/default/files/quiz/1885-0.jpg", answer: "D", points: 5, time: 0},
  {text: "Which is the missing element? \n A) -1; B) 0; C) 1; D) 2; E) None of the above;", quiz_id: 1, image_url: "https://quiz.concorsipubblici.com/sites/default/files/quiz/886-0.jpg", answer: "D", points: 5, time: 0},
  {text: "Your parents give you $1024 for your birthday. By the following day you start using your money, spending exactly half of what you own every day. After how many days you won't even find $1 in your wallet?", quiz_id: 1, answer: "12", points: 7, time: 0},
  {text: "A teacher wrote a large number on the board and asked the students to tell about the divisors of the number one by one. The 1st student said, 'The number is divisible by 2'. The 2nd student said, 'The number is divisible by 3' and so on until the 30th student said, 'The number is divisible by 31'. \n The teacher then commented that exactly two students, who spoke consecutively, spoke wrongly. Which two students spoke wrongly? \n For example, if you think the two numbers are 21 and 22, the students would be number 20 and 21. You should then write the solution like '2021'.",  quiz_id: 1, answer: "1516", points: 7, time: 0},
  {text: "Martha is concerned, because she realized she got lost in the wilderness . Walked 1 mile South, then 1 mile East, then one more mile North. In the end she realizes somehow she got back where she started. Scared by a noise, she turned and saw a big scary bear she didn't notice before. What color is the bear?", quiz_id: 1, answer: "White", points: 7, time: 0},
  {text: "Find a number of 5 digits with the following property: if your add the digit '1' at the end of the number, it will become three times bigger than the number you obtain putting the '1' in front.",  quiz_id: 1, answer: "42857", points: 7, time: 0},
  {text: "A homeless picks from the ground cigarette butts and putting together 4 of those, builds a (almost) new cigarette. If we know that he smoked 7 (almost) new cigarettes, how many cigarette butts did he collect and how many does he have left? \n Write the answer like in the example: 1) butts-picked: 30, 2) butts-left: 2 => solution: 302", quiz_id: 1, answer: "221", points: 7, time: 0}
])

#question = Question.find_by(id: 8)
#question.answer = 'B'
#question.save!

Question.create([
  {text: "What's the capital of Canada? \n A) Toronto; B) Calgary; C) Ottawa; D) Vancouver; E) Montreal;", quiz_id: 2, image_url: "http://www.macleans.ca/wp-content/uploads/2017/05/NAT-NOTE-MAPS3.jpg", answer: "C", points: 1, time: 0},
  {text: "What's the capital of Brasil? \n A) Rio de Janeiro; B) Lima; C) São Paulo; D) Quito; E) Brasilia;", quiz_id: 2, image_url: "https://simplemaps.com/static/svg/br/br.svg", answer: "E", points: 1, time: 0},
  {text: "What's the capital of Spain? \n A) Madrid; B) Porto; C) Barcelona; D) Valencia; E) Granada;", quiz_id: 2, image_url: "https://images-na.ssl-images-amazon.com/images/I/51xwetuN9ML._SX355_.jpg", answer: "A", points: 1, time: 0},
  {text: "What's the capital of China? \n A) Hong Kong; B) Shanghai; C) Tokyo; D) Beijing; E) Taipei;", quiz_id: 2, image_url: "http://www.chinamaps.org/images/china-map/maps-of-china/thumb/china-blank-map.jpg", answer: "D", points: 1, time: 0},
  {text: "What's the capital of Egypt? \n A) Sharm El-Sheikh; B) Giza; C) Cairo; D) Luxor; E) Alexandria;", quiz_id: 2, image_url: "http://www.enchantedlearning.com/africa/egypt/outlinemap/map.GIF", answer: "C", points: 1, time: 0},
  {text: "What's the capital of Bulgaria? \n A) Dobrich; B) Budapest; C) Sofia; D) Bucarest; E) Tirana;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bulgaria_Provinces_Map_Blank.png", answer: "C", points: 3, time: 0},
  {text: "What's the capital of Madagascar? \n A) Antananarivo; B) ; C) Maputo; D) Kansinga; E) Mombasa;", quiz_id: 2, image_url: "http://d2z7bzwflv7old.cloudfront.net/cdn_image/exH_600/images/maps/en/ma/ma-outline.gif", answer: "A", points: 3, time: 0},
  {text: "What's the capital of Mongolia? \n A) Moscow; B) Astana; C) Taipei; D) Ulan Bator; E) Kathmandu;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mongolia_blank.svg/500px-Mongolia_blank.svg.png", answer: "D", points: 3, time: 0},
  {text: "What's the capital of Italy? \n A) Florence; B) Rome; C) Naples; D) Milan; E) Venice;", quiz_id: 2, image_url: "https://orig00.deviantart.net/6087/f/2016/102/7/7/blank_map_of_italy_by_karadzicsblankmaps-d9ypux6.png", answer: "B", points: 3, time: 0},
  {text: "What's the capital of Chile? \n A) Buenos Aires; B) Santiago; C) Asunción; D) Paramaribo; E) San Salvador;", quiz_id: 2, image_url: "https://i.pinimg.com/originals/6e/b0/46/6eb04657ed4b40c3562b9f19cde5f14d.gif", answer: "B", points: 3, time: 0},
  {text: "What's the capital of Latvia? \n A) Tallinn; B) Reykjavik; C) Vilnius; D) Vancouver; E) Minsk;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Latvia_districts_blank.png", answer: "E", points: 5, time: 0},
  {text: "What's the capital of Cameroon? \n A) Douala; B) Yaoundé; C) Dakar; D) Rabat; E) São Tomé;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Cameroon-map-blank.png", answer: "B", points: 5, time: 0},
  {text: "What's the capital of Slovakia? \n A) Warsaw; B) Minsk; C) Bratislava; D) Kiev; E) Ankara;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Slovakia_regions_blank.png", answer: "C", points: 5, time: 0},
  {text: "What's the capital of Afghnistan? \n A) Kabul; B) Kandahar; C) Herat; D) Tehran; E) Islamabad;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Afghanistan_provinces_blank.png", answer: "A", points: 5, time: 0},
  {text: "What's the capital of Chad? \n A) Kano; B) Niamey; C) N'Djamena; D) Abidjan; E) Bamako;", quiz_id: 2, image_url: "http://chadmap.facts.co/ChadBlankOutlineMap.png", answer: "C", points: 5, time: 0},
  {text: "What's the capital of Kosovo? \n A) Pristina; B) Sarajevo; C) Skopje; D) Timisoara; E) Tirana;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Blank_map_of_Kosovo.GIF/1024px-Blank_map_of_Kosovo.GIF", answer: "A", points: 7, time: 0},
  {text: "What's the capital of Belize? \n A) Managua; B) San José; C) Belmopan; D) Mérida; E) Tegucigalpa;", quiz_id: 2, image_url: "https://www.worldatlas.com/webimage/countrys/namerica/camerica/outline/bzoutl.gif", answer: "C", points: 7, time: 0},
  {text: "What's the capital of Indonesia? \n A) Bandung; B) Makassar; C) Kuala Lumpur; D) Manila; E) Jakarta;", quiz_id: 2, image_url: "https://www.worldatlas.com/webimage/countrys/asia/outline/idout.jpg", answer: "E", points: 7, time: 0},
  {text: "What's the capital of Tajikistan? \n A) Kathmandu; B) Tashkent; C) Biškek; D) Ashgabat; E) Dušanbe;", quiz_id: 2, image_url: "http://pluspng.com/img-png/file-blankmap-tajikistan2-92-png-842.png", answer: "E", points: 7, time: 0},
  {text: "What's the capital of Laos? \n A) Haiphong; B) Ho Chi Minh; C) Mandalay; D) Phnom Penh; E) Vientiane;", quiz_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Laos_provinces_blank.png", answer: "E", points: 7, time: 0}
])

p "Created #{Question.count} questions"
p "Created #{Quiz.count} quizzes"

#question = Question.find_by(id: 37)
#question.image_url = "http://www.aneki.com/maps_blank/Belize_blank_outline_map.gif";
#question.save!
