class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.text :desc
      t.string :class
      t.integer :health
      t.integer :armor
      t.integer :speed

      t.timestamps
    end
  end
end
