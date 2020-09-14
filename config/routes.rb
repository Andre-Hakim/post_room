Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'posts/index'
    end
  end

  namespace :api do
    namespace :v1 do
      post 'posts/create'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'posts/show'
    end
  end

  namespace :api do
    namespace :v1 do
      delete 'posts/destroy'
    end
  end

  root 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
