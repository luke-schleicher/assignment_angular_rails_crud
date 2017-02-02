pinBoard.controller('PinIndexCtrl',
  ['$scope', 'pinService', 'pins',
    function($scope, pinService, pins) {
      $scope.pins = pins;

      $scope.processPin = function(valid) {
        console.log("process pin", valid)
        console.log($scope.formData)
        if (valid) {
          pinService.create($scope.formData);
          $scope.formData = {};
        }
      }
    }
  ]
);
