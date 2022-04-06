class Api::ItemsController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index]


  # GET /items or /items.json
  def index
    items = Item.all
    render json: items, status: :ok
  end

  # GET /items/1 or /items/1.json
  def show
  end

  # POST /items or /items.json
  def create
    new_item = Item.create(item_params)
    render json: new_item, status: :created
  end

  # PATCH/PUT /items/1 or /items/1.json
  def update

  end

  # DELETE /items/1 or /items/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def item_params
      params.permit(:item_name, :item_desc, :item_class, :character_id)
    end
end
