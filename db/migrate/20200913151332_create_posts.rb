class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.index :posty_id, null:true
      
      t.timestamps
    end
    add_index :posts, :posty_id
  end
end
