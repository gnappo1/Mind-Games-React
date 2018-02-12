class Api::QuestionsController < ApplicationController
  before_action :set_quiz, only: [:index, :create]
  before_action :set_quiz_question, only: [:show, :update, :destroy]

  def index
    render json: @quiz.questions
  end

  def create
    @question = @quiz.questions.build(question_params)
    if @question.save
      render json: @question
    else
      render json: { message: @question.errors}, status: 400
    end
  end

  def show
    render json: @question
  end

  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: { message: @question.errors }, status: 400
    end
  end

  def destroy
    if @question.destroy
      render json: { message: "Successfully destroyed" }, status: 204
    else
      render json: { message: "Unable to remove this question" }, status: 400
    end
  end

  private

  def set_quiz_question
    @quiz = Quiz.find_by(id: params[:quiz_id])
    @question = @quiz.questions.find_by(id: params[:id])
  end

  def set_quiz
    @quiz = Quiz.find_by(id: params[:quiz_id])
  end

  def question_params
    params.require(:question).permit(:text, :quiz_id, :answer, :completed, :points, :time)
  end
end
