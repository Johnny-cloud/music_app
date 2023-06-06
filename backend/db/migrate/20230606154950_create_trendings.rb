class CreateTrendings < ActiveRecord::Migration[6.1]
  def change
    create_table :trendings do |t|
      t.string :name 
      t.string :artist
      t.string :image
    end
    
  end
end
