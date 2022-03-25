require "test_helper"

class SearchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @search = searches(:one)
  end

  test "should get index" do
    get searches_url, as: :json
    assert_response :success
  end

  test "should create search" do
    assert_difference("Search.count") do
      post searches_url, params: { search: { search_desc: @search.search_desc, search_name: @search.search_name } }, as: :json
    end

    assert_response :created
  end

  test "should show search" do
    get search_url(@search), as: :json
    assert_response :success
  end

  test "should update search" do
    patch search_url(@search), params: { search: { search_desc: @search.search_desc, search_name: @search.search_name } }, as: :json
    assert_response :success
  end

  test "should destroy search" do
    assert_difference("Search.count", -1) do
      delete search_url(@search), as: :json
    end

    assert_response :no_content
  end
end
