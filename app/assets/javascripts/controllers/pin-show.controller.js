pinBoard.controller('PinShowCtrl', ['$scope', '$stateParams', '$state', 'pinService',
function($scope, $state, $stateParams, pinService) {

  $scope.pin = pinService.getPin($stateParams.id);

  $scope.deletePin = function () {
    console.log('controller pin', $scope.pin);
    pinService.deletePin($scope.pin.id);
    $state.go('index');
  }

}]);
