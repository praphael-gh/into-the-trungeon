class Api::CharactersController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index, :default_char, :create]

  # GET /characters or /characters.json
  def index
    characters = Character.all
    render json: characters, include: [:skills, :items, :spells]
  end

  def default_char
    default_characters = Character.where(user_id:1)
    render json: default_characters, include: [:skills, :items, :spells]
  end

  # GET /characters/1 or /characters/1.json
  def show
  end

  # POST /characters or /characters.json
  def create
    new_character = Character.create(character_params)
    render json: new_character, status: :created
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
      params.permit(:char_name, :char_desc, :char_class, :char_health, :char_armor, :char_speed, :char_sneak, :user_id, :skills, :items, :spells)
    end
end