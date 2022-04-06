class Api::SpellsController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index]

  # GET /spells or /spells.json
  def index
    spells = Spell.all
    render json: spells, include :spells
  end

  # GET /spells/1 or /spells/1.json
  def show
  end

  # GET /spells/new
  def new
    @spell = Spell.new
  end

  # GET /spells/1/edit
  def edit
  end

  # POST /spells or /spells.json
  def create
  end

  # PATCH/PUT /spells/1 or /spells/1.json
  def update
  end

  # DELETE /spells/1 or /spells/1.json
  def destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spell
      @spell = Spell.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def spell_params
      params.permit(:spell_name, :spell_desc, :spell_class)
    end
end
