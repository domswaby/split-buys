class CreateUserExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :user_expenses do |t|
      t.integer :user_id, null: false
      t.integer :expense_id, null: false
      t.float :balance, null: false

      t.timestamps
    end
  end
end
