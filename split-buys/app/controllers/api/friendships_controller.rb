class Api::FriendshipsController < ApplicationController
  
    def create 
      @friendship = Friendship.new({user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id]})
      @reverse_friendship = Friendship.new({user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id]})
      
      if @friendship.save && @reverse_friendship.save
        render :show 
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  
    # def destroy 
    #    @friendship = Friendship.find(params[:id])
       
    #    user_id = @friendship.user_id
    #    friend_id = @friendship.friend_id

    #    @reverse_friendship = Friendship.find_by(user_id: friend_id, friend_id: user_id)

    #    if @friendship && @reverse_friendship && @friendship.destroy && @reverse_friendship.destroy
    #     render json: {}
    #    else
    #     render json: ['Something went wrong'], status: 422
    #    end
    # end

    # def destroy 
    #    @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
    #    @reverse_friendship = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])

    #    if @friendship && @reverse_friendship && @friendship.destroy && @reverse_friendship.destroy
    #     render json: {}
    #    else
    #     render json: ['Something went wrong'], status: 422
    #    end
    # end

    def destroy 
       @friendship = Friendship.find_by(user_id: 6, friend_id: params[:id])
       @reverse_friendship = Friendship.find_by(user_id: params[:id], friend_id: 6)
       if @friendship && @reverse_friendship && @friendship.destroy && @reverse_friendship.destroy
        render json: {}
       else
        render json: ['Something went wrong'], status: 422
       end
    end
  
    def friendship_params 
      params.require(:friendship).permit(:user_id, :friend_id)
    end

end  


