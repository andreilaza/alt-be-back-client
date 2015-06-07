angular.module('alt.profile', [])
  .controller(
  'ProfileCtrl',
  function($scope, $state, user, Auth) {
    //Auth.check();
    $scope.user = user;
    $scope.goToRank = function (id) {
      $state.go('tab.profile.ranking');
    };
  });
