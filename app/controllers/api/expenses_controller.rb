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

    def update
        @expense = Expense.find(params[:id])
        if @expense.update(expense_params)
            render :show
        else
            render json: ['Expense not found'], status: 404
        end
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


