class CreateTop10s < ActiveRecord::Migration[6.1]
  def change
    create_table :top10s do |t|
      t.string :name 
      t.string :artist
      t.string :image
    end
    
  end
end
