pinBoard.controller('PinIndexCtrl',
  ['$scope', 'pinService', 'pins',
    function($scope, pinService, pins) {
      $scope.pins = pins;
    }
  ]
);
