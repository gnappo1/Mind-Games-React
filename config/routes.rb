Rails.application.routes.draw do
  namespace :api do
    resources :quizzes
    resources :questions
    resources :contacts, only: [ :create]
  end
end
