angular.module('alt.ranking', [])
  .controller(
  'RankingCtrl',
  function($scope, $state, ranking, $timeout, $ionicScrollDelegate, Auth) {

    //Auth.check();

    $scope.ranking = ranking;

    $scope.goToUser = function (id) {
      $state.go('tab.ranking.user', {id: id});
    };

    var currentUserId = Auth.getUser()._id;
    $scope.isCurrentUser = function (id) {
      if (currentUserId === id) {
        return true;
      }
      return false;
    };

  });
