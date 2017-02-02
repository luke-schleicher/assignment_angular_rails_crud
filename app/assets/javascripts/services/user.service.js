pinBoard.factory('userService',
  ['Restangular',
    function(Restangular) {

      var _currentUser = Restangular.one('users', 1).get().$object

      var getCurrent = function () {
        return _currentUser
      }

      return {
        getCurrent: getCurrent
      };
    }
  ]
);
