class CreateRecommendeds < ActiveRecord::Migration[6.1]
  def change
    create_table :recommendeds do |t|
      t.string :name
      t.string :image
      t.string :artist
    end
    
  end
end
