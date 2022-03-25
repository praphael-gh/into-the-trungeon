class CreateEnemies < ActiveRecord::Migration[7.0]
  def change
    create_table :enemies do |t|
      t.string :enemy_name
      t.text :enemy_desc
      t.string :enemy_class
      t.integer :enemy_health
      t.integer :enemy_armor
      t.integer :enemy_speed
      t.integer :enemy_sneak
      t.references :encounter

      t.timestamps
    end
  end
end
