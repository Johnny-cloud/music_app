class CreateChillHits < ActiveRecord::Migration[6.1]
  def change
    create_table :chill_hits do |t|
      t.string :name
      t.string :image
      t.string :artist
    end
    
  end
end
