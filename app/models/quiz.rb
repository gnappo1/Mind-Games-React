class Quiz < ApplicationRecord
  validates :name, presence: true
  has_many :questions
end
