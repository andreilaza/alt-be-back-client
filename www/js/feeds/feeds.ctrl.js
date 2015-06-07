angular.module('alt.feeds', [])
  .controller(
  'FeedsCtrl',
  function ($scope, $state, $stateParams, $ionicModal, feeds, PostService, Auth) {
    //Auth.check();

    $scope.feeds = feeds;
    console.log(feeds);


    $scope.type = $stateParams.type;
    $scope.goToPost = function (id) {
      $state.go('tab.feeds.post', {id: id});
    };

    $scope.goToEvent = function (id) {
      $state.go('tab.feeds.event', {id: id});
    };

    $scope.goToUser = function (id) {
      $state.go('tab.feeds.user', {id: id});
    };
    $scope.categoryType = function (item) {
      if ($scope.type) {
        return item.category == $scope.type;
      }
      return true;
    };


    $ionicModal.fromTemplateUrl('js/feeds/add-post.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      // Execute action
    });


    $scope.submitPost = function (message) {
      PostService.create(message, Auth.getUser()._id);
      $scope.closeModal();
    }
  });
