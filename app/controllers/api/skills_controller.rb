class Api::SkillsController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index]

  # GET /skills or /skills.json
  def index
    skills = Skill.all
    render json: skills, status: :ok
  end

  # GET /skills/1 or /skills/1.json
  def show
  end

  # GET /skills/new
  def new
    @skill = Skill.new
  end

  # GET /skills/1/edit
  def edit
  end

  # POST /skills or /skills.json
  def create
  end

  # PATCH/PUT /skills/1 or /skills/1.json
  def update
   
  end

  # DELETE /skills/1 or /skills/1.json
  def destroy

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_skill
      @skill = Skill.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def skill_params
      params.permit(:skill_name, :skill_desc, :skill_class, :character_id)
    end
end