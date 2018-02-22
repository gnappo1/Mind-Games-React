class Question < ApplicationRecord
  validates :text, :answer, :points, :quiz_id, presence: true
  belongs_to :quiz
end
