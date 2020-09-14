class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    post = Post.all.order(created_at: :desc)
    render json: post
  end

  def create
    post = Post.create!(post_params)
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def show
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def destroy
    debugger
    post = Post.find(params[:id])
  
    post.destroy
    render json: { message: 'post deleted!' }
  end

  private

  def post_params
    params.require(:post).permit(:title, :description)
  end

  def post
    @post ||= post.find(params[:id])
  end
end
