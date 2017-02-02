pinBoard.controller('PinIndexCtrl',
  ['$scope', 'pinService', 'pins',
    function($scope, pinService, pins) {
      $scope.pins = pins;

      $scope.processPin = function(valid) {
        if (valid) {
          pinService.create($scope.formData);
          $scope.formData = {};
        }
      }
    }
  ]
);
