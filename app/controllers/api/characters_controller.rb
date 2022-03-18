class Api::CharactersController < ApplicationController
  before_action :set_character, only: %i[ show edit update destroy ]

  # GET /characters or /characters.json
  def index
    characters = Character.all
    render json: characters, include: [:skills, :items, :spells]
  end

  # GET /characters/1 or /characters/1.json
  def show
  end

  # POST /characters or /characters.json
  def create
  end

  # DELETE /characters/1 or /characters/1.json
  def destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.permit(:name, :health, :armor, :speed)
    end
end