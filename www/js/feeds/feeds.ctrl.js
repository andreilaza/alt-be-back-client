angular.module('alt.feeds', [])
  .controller(
  'FeedsCtrl',
  function ($scope, $state, $stateParams, $ionicModal, Auth) {
    // Auth.check();

    $scope.feeds = [
      {
        id: 1,
        category: 'activity',
        date: 1433601916803,

        user: {
          id: 3,
          name: 'Andrei Demian',
          avatar: 'http://lorempixel.com/g/50/50/',
        },

        action: {
          id: 2,
          input: '\"Jurnalul BUG Mafia\"',
          label: 'is reading',
          type: 'reading'
        }
      },
      {
        id: 1,
        category: 'event',
        date: 1433601916803,

        user: {
          id: 3,
          name: 'Claudiu Filip',
          avatar: 'http://lorempixel.com/g/50/50/',
        },

        action: {
          id: 2,
          title: 'Wine tasting',
          type: 'event'
        }
      },
      {
        id: 1,
        category: 'post',
        date: 1433601916803,

        comments: [],
        user: {
          id: 3,
          name: 'Claudiu Filip',
          avatar: 'http://lorempixel.com/g/50/50/'
        },

        action: {
          id: 2,
          input: 'Ce faci fetele? Te plimbi',
          label: 'posted'

        }
      }

    ];

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

    $scope.submitPost = function () {

    };
  });
