class Api::EnemiesController < ApplicationController
  before_action :authorized

  # GET /enemies
  def index
    @enemies = Enemy.all

    render json: @enemies
  end

  # GET /enemies/1
  def show
    render json: @enemy
  end

  # POST /enemies
  def create
    @enemy = Enemy.new(enemy_params)

    if @enemy.save
      render json: @enemy, status: :created, location: @enemy
    else
      render json: @enemy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /enemies/1
  def update
    if @enemy.update(enemy_params)
      render json: @enemy
    else
      render json: @enemy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /enemies/1
  def destroy
    @enemy.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enemy
      @enemy = Enemy.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def enemy_params
      params.require(:enemy).permit(:enemy_name, :enemy_desc, :enemy_class, :sneak_diff)
    end
end
