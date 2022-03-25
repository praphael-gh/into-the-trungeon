class Api::UsersController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index, :show, :create]

  # GET /users
  def index
    users = User.all
    render json: users, status: :ok
  end

  # GET /users/1
  def show
    selected_user = User.find_by(id: session[:user_id])
    render json: selected_user, status: :ok
  end

  # POST /users
  def create
    new_user = User.create(user_params)
    render json: new_user, status: :ok
  end



  # DELETE /users/1
  def destroy
    user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password)
    end
end
