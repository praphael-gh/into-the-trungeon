class Api::CharactersController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index, :show, :char_selected, :default_char, :create]

  # GET /characters or /characters.json
  def index
    characters = Character.all
    render json: characters, include: [:skills, :items, :spells]
  end

  def default_char
    default_characters = Character.where(user_id:1)
    render json: default_characters, include: [:skills, :items, :spells], status: :ok
  end

  # GET /characters/1 or /characters/1.json
  def show
    char = Character.find(params[:id])
    char_copy = char.amoeba_dup
    char_copy.user_id = session[:user_id]
    char_copy.save
    render json: char_copy, status: :created
  end

  # POST /characters or /characters.json
  def create
    new_character = Character.create(character_params)
    render json: new_character, status: :created
  end

  def char_selected
    char_selected = Character.find_by(user_id: session[:user_id])
    render json: char_selected, status: :ok
  end

  def update
    
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