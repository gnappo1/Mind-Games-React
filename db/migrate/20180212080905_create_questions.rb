class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :text
      t.boolean :completed, default: false
      t.integer :quiz_id
      t.string :answer
      t.integer :points, default: 1
      t.float :time

      t.timestamps
    end
  end
end
