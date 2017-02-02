pinBoard.factory('pinService',
  ['Restangular',
    function(Restangular) {

      var _pins = [];

      var all = function all() {
        return Restangular.all('pins').getList().then(function (response) {
          // our binding will be servered
          _pins = response;
          return _pins;
        });
      };

      var create = function create(params) {
        var newPin = {
          pin: {
            item: params.item,
            description: params.description,
            buy_sell: params.type
          }
        };

        return Restangular.all('pins').post(newPin).then(
          function(pin) {
            _pins.unshift(pin);
            return pin;
          },
          function(response) {
            console.error("Error!" + response);
          }
        )
      }

      var getPin = function getPin(id) {
        return Restangular.one('pins', id).get().$object;
      };

      // TODO: FIX THIS ACCORDING TO RESTANGULAR, EXTEND?
      var deletePin = function deletePin(id) {
        return Restangular.one('pins', id).remove().then(
          function(pin) {
            console.log('pin', pin);
            for (var i = 0; i < _pins.length; i++) {
              if(_pins[i].id === pin.id) {
                _pins.splice(i, 1);
                break;
              }
            }
            return pin;
          },
          function(response) {
            console.error("Error!" + response);
          }
        )
      }

      return {
        all: all,
        create: create,
        getPin: getPin,
        deletePin: deletePin
      };
    }
  ]
);
