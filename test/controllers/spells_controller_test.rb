require "test_helper"

class SpellsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @spell = spells(:one)
  end

  test "should get index" do
    get spells_url, as: :json
    assert_response :success
  end

  test "should create spell" do
    assert_difference("Spell.count") do
      post spells_url, params: { spell: { spell_class: @spell.spell_class, spell_desc: @spell.spell_desc, spell_name: @spell.spell_name } }, as: :json
    end

    assert_response :created
  end

  test "should show spell" do
    get spell_url(@spell), as: :json
    assert_response :success
  end

  test "should update spell" do
    patch spell_url(@spell), params: { spell: { spell_class: @spell.spell_class, spell_desc: @spell.spell_desc, spell_name: @spell.spell_name } }, as: :json
    assert_response :success
  end

  test "should destroy spell" do
    assert_difference("Spell.count", -1) do
      delete spell_url(@spell), as: :json
    end

    assert_response :no_content
  end
end
