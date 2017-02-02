class UsersController < ApplicationController

  def show
    @current_user = User.first

    respond_to do |format|
      format.json { render json: @current_user }
    end
  end
end
