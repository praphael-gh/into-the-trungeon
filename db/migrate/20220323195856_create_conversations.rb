class CreateConversations < ActiveRecord::Migration[7.0]
  def change
    create_table :conversations do |t|
      t.string :convo_name
      t.text :convo_desc
      t.string :convo_class
      t.references :encounter

      t.timestamps
    end
  end
end
