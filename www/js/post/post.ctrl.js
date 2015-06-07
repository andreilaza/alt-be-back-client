angular.module('alt.post', [])
  .controller(
  'PostCtrl',
  function ($scope, $state, $stateParams, $ionicModal, post, PostService, Auth) {
    //Auth.check();

    $scope.post = post;

    $scope.commentSubmit = function (message) {
      PostService.addComment($scope.post._id, message, Auth.getMemberId())
        .then(function (data) {
          $scope.post.comments = data.comments;
        });
    };
  });
