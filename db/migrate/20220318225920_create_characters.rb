class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :char_name
      t.text :char_desc
      t.string :char_class
      t.integer :char_health
      t.integer :char_armor
      t.integer :char_speed
      t.integer :char_sneak
      t.references :user

      t.timestamps
    end
  end
end
