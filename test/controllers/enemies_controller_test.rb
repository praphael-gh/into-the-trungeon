require "test_helper"

class EnemiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enemy = enemies(:one)
  end

  test "should get index" do
    get enemies_url, as: :json
    assert_response :success
  end

  test "should create enemy" do
    assert_difference("Enemy.count") do
      post enemies_url, params: { enemy: { enemy_class: @enemy.enemy_class, enemy_desc: @enemy.enemy_desc, enemy_name: @enemy.enemy_name, sneak_diff: @enemy.sneak_diff } }, as: :json
    end

    assert_response :created
  end

  test "should show enemy" do
    get enemy_url(@enemy), as: :json
    assert_response :success
  end

  test "should update enemy" do
    patch enemy_url(@enemy), params: { enemy: { enemy_class: @enemy.enemy_class, enemy_desc: @enemy.enemy_desc, enemy_name: @enemy.enemy_name, sneak_diff: @enemy.sneak_diff } }, as: :json
    assert_response :success
  end

  test "should destroy enemy" do
    assert_difference("Enemy.count", -1) do
      delete enemy_url(@enemy), as: :json
    end

    assert_response :no_content
  end
end
