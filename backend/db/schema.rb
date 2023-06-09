# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_06_09_055635) do

  create_table "albums", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.integer "artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "image"
  end

  create_table "chill_hits", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "artist"
  end

  create_table "favorites", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "artist"
  end

  create_table "mega_hits", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "artist"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "artist"
  end

  create_table "recommendeds", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "artist"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.string "album"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name"
    t.integer "album_id"
    t.integer "artist_id"
  end

  create_table "today_hits", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "artist"
  end

  create_table "top10s", force: :cascade do |t|
    t.string "name"
    t.string "artist"
    t.string "image"
  end

  create_table "trendings", force: :cascade do |t|
    t.string "name"
    t.string "artist"
    t.string "image"
  end

end
