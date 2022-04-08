class Api::EncountersController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index, :show]

  # GET /encounters
  def index
    encounters = Encounter.all
    render json: encounters, status: :ok
  end

  # GET /encounters/1
  def show
    index_encounter = Encounter.find(params[:id])
    render json: index_encounter, status: :ok
  end

  # POST /encounters
  def create
  end

  # PATCH/PUT /encounters/1
  def update

  end

  # DELETE /encounters/1
  def destroy
    @encounter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_encounter
      @encounter = Encounter.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def encounter_params
      params.permit(:encounter_name, :encounter_desc, :encounter_class, :sneak_diff)
    end
end
