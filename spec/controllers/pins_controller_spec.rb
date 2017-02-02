require 'rails_helper'

describe PinsController do

  let(:json) { JSON.parse(response.body) }
  let(:user) { User.create(username: 'a user') }

  describe 'GET pins.json' do

    before do
      get :index, format: :json
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_an Array
    end
  end

  describe 'POST pins.json' do

    before do
      user
      post :create, params: { pin: { item: 'some title', description: 'some description', buy_sell: true }, format: :json }
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_a Hash
    end
  end

  describe 'GET pins/:id.json' do

    let(:pin) { Pin.create( item: 'some title', description: 'some description', buy_sell: true, user_id: user.id)}

    before do
      pin
      get :show, params: { id: pin.id, format: :json }
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_a Hash
    end

    it 'should return a pin of the correct id' do
      expect(json["id"]).to eq(pin.id)
    end

  end

end
