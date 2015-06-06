angular.module('alt.events', [])
  .controller(
  'EventsCtrl',
  function($scope, $state, Auth) {
    //Auth.check();
    $scope.events = [
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      },
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      },
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      },
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      },
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      },
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      },
      {
        id: 1,
        title: 'Pretty Hate Machine',
        avatar: 'http://lorempixel.com/g/50/50/',
        image: 'http://lorempixel.com/g/600/400',
        description: 'Nine Inch Nails'
      }
    ];

    $scope.attend = function (event) {

    };
    $scope.goToEvent = function (id) {
      $state.go('event', {id: id});
    };

  });
