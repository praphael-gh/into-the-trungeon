class Api::SessionsController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: :create


  # POST /sessions
  def create
    user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: "Invalid Username or Password" }, status: :unauthorized
      end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_session
      @session = Session.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def session_params
      params.fetch(:session, {})
    end
end
