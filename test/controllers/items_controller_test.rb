require "test_helper"

class ItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @item = items(:one)
  end

  test "should get index" do
    get items_url, as: :json
    assert_response :success
  end

  test "should create item" do
    assert_difference("Item.count") do
      post items_url, params: { item: { item_class: @item.item_class, item_desc: @item.item_desc, item_name: @item.item_name } }, as: :json
    end

    assert_response :created
  end

  test "should show item" do
    get item_url(@item), as: :json
    assert_response :success
  end

  test "should update item" do
    patch item_url(@item), params: { item: { item_class: @item.item_class, item_desc: @item.item_desc, item_name: @item.item_name } }, as: :json
    assert_response :success
  end

  test "should destroy item" do
    assert_difference("Item.count", -1) do
      delete item_url(@item), as: :json
    end

    assert_response :no_content
  end
end
