class Api::ExpensesController < ApplicationController

    def create
        @expense = Expense.new(expense_params)
        if @expense.save 
            render :show
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def show 

    end

    def destroy 
        @expense = Expense.includes(:expenders).find(params[:id])
        if @expense && @expense.destroy 
            render :show
        else
            render json: ['something went wrong'], status: 422
        end
    end

    def expense_params 
        params.require(:expense).permit(:description, :amount, :split_type, :payer_id, :date_incurred)
    end
end


