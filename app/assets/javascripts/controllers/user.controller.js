pinBoard.controller('UserCtrl',
  ['$scope', 'Auth',
    function($scope, Auth) {
      Auth.currentUser().then(function(user) {
        $scope.currentuser = user;
        console.log(user);
      }, function(response) {
        console.error(response);
      });
    }
  ]
);
