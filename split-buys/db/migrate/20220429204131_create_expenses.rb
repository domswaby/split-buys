class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :title, null: false
      t.float :amount, null: false
      t.string :split_type, null: false
      t.integer :payer_id, null: false
      t.date :date_incurred, null: false

      t.timestamps
    end
  end
end
