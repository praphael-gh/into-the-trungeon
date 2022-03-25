class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :skill_name
      t.text :skill_desc
      t.string :skill_class
      t.references :character, :search

      t.timestamps
    end
  end
end
