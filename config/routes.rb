Rails.application.routes.draw do
  namespace :api do
    resources :quizzes
    resources :questions
  end
end
