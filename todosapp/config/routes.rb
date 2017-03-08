Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api do
    resources :todos, defaults: {format: :json}, only: [:index, :show, :create, :update, :destroy]
  end

  #
  # namespace :api do
  # get 'todos/show'
  # end
  #
  # namespace :api do
  # get 'todos/index'
  # end
  #
  # namespace :api do
  # get 'todos/update'
  # end
  #
  # namespace :api do
  # get 'todos/destroy'
  # end
  #
  # get 'todos/create'
  #
  # get 'todos/show'
  #
  # get 'todos/index'
  #
  # get 'todos/update'
  #
  # get 'todos/destroy'


end
