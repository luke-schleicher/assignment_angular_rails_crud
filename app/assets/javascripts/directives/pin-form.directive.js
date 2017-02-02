pinBoard.directive('pinForm', function() {
  return {
    templateUrl: '/directives/pins/pin-form.html',
    scope: {
      formData: '=',
      processPin: '&'
    },
    restrict: 'E'
  };
});
