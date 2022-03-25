require "test_helper"

class TrapsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trap = traps(:one)
  end

  test "should get index" do
    get traps_url, as: :json
    assert_response :success
  end

  test "should create trap" do
    assert_difference("Trap.count") do
      post traps_url, params: { trap: { trap_class: @trap.trap_class, trap_desc: @trap.trap_desc, trap_name: @trap.trap_name } }, as: :json
    end

    assert_response :created
  end

  test "should show trap" do
    get trap_url(@trap), as: :json
    assert_response :success
  end

  test "should update trap" do
    patch trap_url(@trap), params: { trap: { trap_class: @trap.trap_class, trap_desc: @trap.trap_desc, trap_name: @trap.trap_name } }, as: :json
    assert_response :success
  end

  test "should destroy trap" do
    assert_difference("Trap.count", -1) do
      delete trap_url(@trap), as: :json
    end

    assert_response :no_content
  end
end
