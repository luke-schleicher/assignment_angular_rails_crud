var pinBoard = angular.module('pinBoard', ['ui.router', 'restangular']);

pinBoard.constant('_', window._);
pinBoard.run(function($rootScope) {
  $rootScope._ = window._;
});

pinBoard.config(
  ["$httpProvider", "$stateProvider", "$urlRouterProvider", "RestangularProvider",
    function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {

      // Restangular
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({ "content-type": 'application/json' });

      // routing
      $urlRouterProvider.otherwise('/pins');

      $stateProvider
        .state('index', {
          url: '/pins',
          views: {
            'main@': {
              templateUrl: '/templates/pins/index.html',
              controller: 'PinIndexCtrl'
            }
          },
          resolve: {
            pins: function(pinService) {
              return pinService.all();
            }
          }
        });

}]);
