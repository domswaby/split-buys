Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'staticpages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:index, :create]
    resources :friendships, only: [:create, :destroy]
    resources :expenses
    resources :user_expenses, only: [:create, :destroy]
  end

end