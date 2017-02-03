pinBoard.controller('PinIndexCtrl',
  ['$scope', 'pinService', 'userService', 'pins',
    function($scope, pinService, userService, pins) {
      $scope.pins = pins;

      $scope.currentUser = userService.getCurrent();

      $scope.processPin = function(valid) {
        if (valid) {
          pinService.create($scope.formData);
          $scope.formData = {};
        }
      }
    }
  ]
);
