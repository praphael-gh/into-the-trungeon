class Api::TrapsController < ApplicationController
  before_action :set_trap, only: %i[ show update destroy ]

  # GET /traps
  def index
    @traps = Trap.all

    render json: @traps
  end

  # GET /traps/1
  def show
    render json: @trap
  end

  # POST /traps
  def create
    @trap = Trap.new(trap_params)

    if @trap.save
      render json: @trap, status: :created, location: @trap
    else
      render json: @trap.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /traps/1
  def update
    if @trap.update(trap_params)
      render json: @trap
    else
      render json: @trap.errors, status: :unprocessable_entity
    end
  end

  # DELETE /traps/1
  def destroy
    @trap.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trap
      @trap = Trap.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trap_params
      params.require(:trap).permit(:trap_name, :trap_desc, :trap_class)
    end
end
