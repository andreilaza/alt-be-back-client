angular.module('alt.user', [])
  .controller(
  'UserCtrl',
  function($scope, user, Auth) {
    //Auth.check();
    $scope.user = user;

  });
