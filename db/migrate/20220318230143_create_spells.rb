class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :spells do |t|
      t.string :spell_name
      t.text :spell_desc
      t.string :spell_class

      t.timestamps
    end
  end
end
