class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :item_name
      t.text :item_desc
      t.string :item_class

      t.timestamps
    end
  end
end
