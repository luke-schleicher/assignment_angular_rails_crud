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
          title: params.title,
          description: params.description,
          buy_sell: params.type
        }

        return Restangular.all('pins').post(newPin).then(
          function(pin) {
            _pins.unshift(pin);
            return pin
          },
          function(response) {
            console.error("Error!" + response);
          }
        )
      }

      return {
        all: all,
        create: create
      };
    }
  ]
);
