Rails.application.routes.draw do
  resources :spells
  resources :items
  resources :skills
  resources :characters
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
