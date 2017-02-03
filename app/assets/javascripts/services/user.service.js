pinBoard.factory('userService',
  ['Restangular', 'Auth',
    function(Restangular, Auth) {

      var _currentUser;

      Auth.currentUser().then(function(user) {
        _currentUser = user;
        console.log(user);
      }, function(response) {
        console.error(response);
      });

      var getCurrent = function () {
        return _currentUser
      }

      return {
        getCurrent: getCurrent
      };
    }
  ]
);
