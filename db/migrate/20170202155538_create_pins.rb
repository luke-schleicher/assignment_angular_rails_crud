class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :item, null: false
      t.boolean :buy_sell, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :pins, :user_id
  end
end
