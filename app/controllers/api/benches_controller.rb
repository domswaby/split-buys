class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render @bench.errors.full_messages, status: 422
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
