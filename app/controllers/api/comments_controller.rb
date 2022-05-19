class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])
        if @comment && @comment.destroy 
            render :show
        else
            render json: ['something went wrong'], status: 422
        end
    end

    def comment_params 
        params.require(:comment).permit(:body, :author_id, :expense_id)
    end
end


