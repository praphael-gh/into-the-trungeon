class CreateEncounters < ActiveRecord::Migration[7.0]
  def change
    create_table :encounters do |t|
      t.string :encounter_name
      t.text :encounter_desc
      t.string :encounter_class
      t.text :skills_required
      t.integer :sneak_diff
      t.references :user

      t.timestamps
    end
  end
end
