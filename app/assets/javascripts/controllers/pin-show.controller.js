pinBoard.controller('PinShowCtrl', ['$scope', '$stateParams', '$state', 'pinService', 'userService',
function($scope, $stateParams, $state, pinService, userService) {

  $scope.currentUser = userService.getCurrent();

  pinService.getPin($stateParams.id).then(
    function (pin) {
      $scope.pin = pin;
    });

  $scope.deletePin = function () {
    pinService.deletePin($scope.pin).then(
      function() {
        $state.go('index');        
      }
    );
  };

}]);
