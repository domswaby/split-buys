class AddEmail < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null: false
    add_index :users, :email 

  end
end
