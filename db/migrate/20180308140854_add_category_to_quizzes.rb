class AddCategoryToQuizzes < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :category, :string, default: "Logic"
  end
end
