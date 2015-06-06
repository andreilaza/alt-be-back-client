angular.module('alt.tabs', [])
  .controller(
  'TabsCtrl',
  function($scope, Auth) {

    $scope.sectionLoading = true;

    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.resolve) {
        console.log('unresolvee');
        $scope.sectionLoading = true;

      }
    });
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.resolve) {
        console.log('resolve');
        $scope.sectionLoading = false;
      }
    });
  });
