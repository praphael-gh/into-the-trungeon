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

ActiveRecord::Schema[7.0].define(version: 2022_03_24_154821) do
  create_table "characters", force: :cascade do |t|
    t.string "char_name"
    t.text "char_desc"
    t.string "char_class"
    t.integer "char_health"
    t.integer "char_armor"
    t.integer "char_speed"
    t.integer "char_sneak"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.string "convo_name"
    t.text "convo_desc"
    t.string "convo_class"
    t.integer "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_conversations_on_encounter_id"
  end

  create_table "encounters", force: :cascade do |t|
    t.string "encounter_name"
    t.text "encounter_desc"
    t.string "encounter_class"
    t.text "skills_required"
    t.integer "sneak_diff"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_encounters_on_user_id"
  end

  create_table "enemies", force: :cascade do |t|
    t.string "enemy_name"
    t.text "enemy_desc"
    t.string "enemy_class"
    t.integer "enemy_health"
    t.integer "enemy_armor"
    t.integer "enemy_speed"
    t.integer "enemy_sneak"
    t.integer "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_enemies_on_encounter_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "item_name"
    t.text "item_desc"
    t.string "item_class"
    t.integer "character_id"
    t.integer "search_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_items_on_character_id"
    t.index ["search_id"], name: "index_items_on_search_id"
  end

  create_table "searches", force: :cascade do |t|
    t.string "search_name"
    t.text "search_desc"
    t.integer "search_diff"
    t.integer "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_searches_on_encounter_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "skill_name"
    t.text "skill_desc"
    t.string "skill_class"
    t.integer "character_id"
    t.integer "search_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_skills_on_character_id"
    t.index ["search_id"], name: "index_skills_on_search_id"
  end

  create_table "spells", force: :cascade do |t|
    t.string "spell_name"
    t.text "spell_desc"
    t.string "spell_class"
    t.integer "character_id"
    t.integer "search_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_spells_on_character_id"
    t.index ["search_id"], name: "index_spells_on_search_id"
  end

  create_table "traps", force: :cascade do |t|
    t.string "trap_name"
    t.text "trap_desc"
    t.string "trap_class"
    t.integer "trap_search_diff"
    t.integer "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_traps_on_encounter_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
