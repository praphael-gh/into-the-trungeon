class ApplicationController < ActionController::API
    before_action :authorized

    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def authorized
        return render json:{error: "Not Authorized"}, status: :unauthorized
        unless session.include? :user_id
    end

private

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end
end

end
