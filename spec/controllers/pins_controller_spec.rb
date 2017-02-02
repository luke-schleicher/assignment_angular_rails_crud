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
      p json
      expect(json).to be_an Array
    end
  end
end
