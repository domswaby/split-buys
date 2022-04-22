class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      head 404
      # render json: { error: 'Not Logged In', status: 404 }, status: 404
    end
  end
end
