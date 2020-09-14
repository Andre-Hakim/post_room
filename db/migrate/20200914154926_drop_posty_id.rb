class DropPostyId < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :posty_id
  end
end
