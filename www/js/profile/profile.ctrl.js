angular.module('alt.profile', [])
  .controller(
  'ProfileCtrl',
  function($scope, $state, Auth) {
    //Auth.check();
    $scope.goToRank = function (id) {
      $state.go('tab.profile.ranking');
    };
  });
