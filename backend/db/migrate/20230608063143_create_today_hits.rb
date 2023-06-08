class CreateTodayHits < ActiveRecord::Migration[6.1]
  def change
    create_table :today_hits do |t|
      t.string :name
      t.string :image
      t.string :artist
    end
    
  end
end
