class CreateSearches < ActiveRecord::Migration[7.0]
  def change
    create_table :searches do |t|
      t.string :search_name
      t.text :search_desc
      t.integer :search_diff
      t.references :encounter

      t.timestamps
    end
  end
end
