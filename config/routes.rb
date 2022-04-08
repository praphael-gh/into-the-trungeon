Rails.application.routes.draw do
  
  namespace :api do
    get "/auth", to: "users#show"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    resources :sessions
    resources :users

    resources :characters
    get "/default-chars", to: "characters#default_char"
    get "/char", to: "characters#char_selected"

    resources :skills
    resources :items
    resources :spells
    
    resources :encounters
    resources :enemies
    resources :searches
    resources :traps
    resources :conversations
  end
end
