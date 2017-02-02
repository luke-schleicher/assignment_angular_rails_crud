class PinsController < ApplicationController

  def index
    @pins = Pin.all.order(created_at: :desc)

    respond_to do |format|
      format.json { render json: @pins }
    end
  end

  def create
    @current_user = User.first
    @pin = @current_user.pins.create(pin_params)
    respond_to do |format|
      format.json { render json: @pin }
    end
  end

  def show
    @pin = Pin.find_by(id: params[:id])

    respond_to do |format|
      format.json { render json: @pin.to_json(include: :user) }
    end
  end

  def destroy
    @pin = Pin.find_by(id: params[:id])

    if @pin.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.json { render json: @pin.to_json(include: :user) }
      end
    end

  end

  private

  def pin_params
    params.require(:pin).permit(:item, :description, :buy_sell)
  end
end
