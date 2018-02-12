class Api::QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :edit, :update, :destroy]

  def index
    render json: Quiz.all
  end

  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      render json: @quiz
    else
      render json: { message: @quiz.errors}, status: 400
    end
  end

  def show
    render json: @quiz
  end

  def update
    if @quiz.update(quiz_params)
      render json: @quiz
    else
      render json: { message: @quiz.errors }, status: 400
    end
  end

  def destroy
    if @quiz.destroy
      render json: { message: "Successfully destroyed" }, status: 204
    else
      render json: { message: "Unable to remove this quiz" }, status: 400
    end
  end

  private

  def set_quiz
    @quiz = Quiz.find_by(id: params[:id])
  end

  def quiz_params
    params.require(:quiz).permit(:name, :finished, :total_time)
  end
end
