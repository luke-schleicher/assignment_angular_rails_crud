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

      return {
        all: all
      };
    }
  ]
);
