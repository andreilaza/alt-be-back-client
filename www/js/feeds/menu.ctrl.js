angular.module('alt.feeds.menu', [])
  .controller(
  'MenuCtrl',
  function ($scope, $state, $ionicSideMenuDelegate, Auth) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  });
