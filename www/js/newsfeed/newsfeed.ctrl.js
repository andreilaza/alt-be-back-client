angular.module('alt.newsfeed', [])
  .controller(
  'NewsfeedCtrl',
  function ($scope, $state, Auth) {
    //Auth.check();
    $scope.users = [
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      },
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      },
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      },
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      },
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      },
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      },
      {
        id: 1,
        name: 'Elvis Presley',
        avatar: 'http://lorempixel.com/g/50/50/',
        action: 'Drinking at the bar',
        eventId: 2
      }
    ];

    $scope.goToEvent = function (id) {

      $state.go('tab.newsfeed.event', {id: id});
    };

    $scope.goToUser = function (id) {
      $state.go('tab.newsfeed.user', {id: id});
    };
  });
