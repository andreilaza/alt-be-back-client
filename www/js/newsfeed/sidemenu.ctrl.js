angular.module('alt.newsfeed.sidemenu', [])
  .controller(
  'SideMenuCtrl',
  function ($scope, $state, $ionicSideMenuDelegate, Auth) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  });
