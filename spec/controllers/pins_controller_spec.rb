require 'rails_helper'

describe PinsController do
  describe 'GET pins.json' do
    let(:json) { JSON.parse(response.body) }

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
    let(:json) { JSON.parse(response.body) }
    let(:user) { User.create(username: 'a user') }

    before do
      user
      post :create, pin: { item: 'some title', description: 'some description', buy_sell: true }, format: :json
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_a Hash
    end
  end
end
