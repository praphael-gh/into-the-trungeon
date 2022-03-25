class CreateTraps < ActiveRecord::Migration[7.0]
  def change
    create_table :traps do |t|
      t.string :trap_name
      t.text :trap_desc
      t.string :trap_class
      t.integer :trap_search_diff
      t.references :encounter

      t.timestamps
    end
  end
end
