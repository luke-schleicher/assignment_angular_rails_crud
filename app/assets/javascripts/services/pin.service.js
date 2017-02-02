pinBoard.factory('pinService',
  ['Restangular',
    function(Restangular) {

      var _pins = [];

      var all = function all() {
        return Restangular.all('pins').getList().then(function (response) {
          // our binding will be servered
          console.log("all response", response)
          _pins.length = 0
          _pins.concat(response);
          console.log("_pins", _pins)
          return _pins;
        });
      };

      var create = function create(params) {
        var newPin = {
          pin: {
            item: params.item,
            description: params.description,
            buy_sell: params.buy_sell
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
        return Restangular.one('pins', id).get();
      };

      var deletePin = function deletePin(pin) {
        return pin.remove().then(
          function(pin) {
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

      var updatePin = function updatePin(pin) {

        pin.put().then(function(pin){
          console.log("returned pin", pin)
          for (var i = 0; i < _pins.length; i++) {
            if(_pins[i].id === pin.id) {
              _pins[i] = pin;
              break;
            }
          }

        }, function(response) {
          console.error("Error!" + response);
        })
      };

      return {
        all: all,
        create: create,
        getPin: getPin,
        deletePin: deletePin,
        updatePin: updatePin
      };
    }
  ]
);
