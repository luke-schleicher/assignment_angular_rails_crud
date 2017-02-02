pinBoard.controller('PinShowCtrl', ['$scope', '$stateParams', 'pinService', function($scope, $stateParams, pinService) {

  $scope.pin = pinService.getPin($stateParams.id);

}]);