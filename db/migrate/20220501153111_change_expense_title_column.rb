class ChangeExpenseTitleColumn < ActiveRecord::Migration[5.2]
  def change

    rename_column :expenses, :title, :description
  end
end
