pinBoard.controller('PinEditCtrl', ['$scope', '$stateParams', '$state', 'pinService', function($scope, $stateParams, $state, pinService) {

  pinService.getPin($stateParams.id).then(function(pin) {
    $scope.pin = pin;
  });

  $scope.processPin = function(valid) {
    if (valid) {
      pinService.updatePin($scope.pin).then(
        function() {
          $state.go('show', { id: $scope.pin.id });
        }
      );
    }
  };

}]);
