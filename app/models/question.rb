class Question < ApplicationRecord
  validates :text, :anwer, :points, :quizz_id, presence: true
  belongs_to :quiz
end
