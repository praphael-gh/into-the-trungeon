class Api::EncountersController < ApplicationController
  before_action :authorized

  # GET /encounters
  def index
    encounters = Encounter.all
    render json: encounters
  end

  # GET /encounters/1
  def show
    render json: @encounter
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
