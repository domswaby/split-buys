class Api::UserExpensesController < ApplicationController

    def create 
        @user_expense = UserExpense.new(user_expense_params)
        if @user_expense.save 
            render :show 
        else
            render json: @user_expense.errors.full_messages, status: 422
        end
    end

    def destroy
        @user_expense = UserExpense.find_by(user_id: params[:user_expense][:user_id], expense_id: params[:user_expense][:expense_id])
        if @user_expense && @user_expense.destroy
            render :show 
        else
           render json: ["Something went wrong"], status: 422
        end
    end

    def user_expense_params
        params.require(:user_expense).permit(:user_id, :expense_id, :balance)
    end

end
