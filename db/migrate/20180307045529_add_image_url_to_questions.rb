class AddImageUrlToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :image_url, :string, default: ""
  end
end
