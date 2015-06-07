angular.module('alt.post', [])
  .controller(
  'PostCtrl',
  function ($scope, $state, $stateParams, $ionicModal, Auth) {
    //Auth.check();

    $scope.post = {
      id: 1,
      category: 'post',
      date: 1433601916803,

      comments: [],
      user: {
        id: 3,
          name: 'Claudiu Filip',
          avatar: 'http://lorempixel.com/g/50/50/'
      },
      input: 'Ce faci fetele? Te plimbi',
      label: 'posted'
    };

    $scope.post.comments = [
      {
        id: 21,
        date: 1433626818487,
        message: 'Ba, daa. De mult am asteptat asa ceva. Serios acuma!',
        user : {
          id: 3,
          name: 'Claudiu Filip',
          avatar: 'http://lorempixel.com/g/50/50/'

        }
      },
      {
        id: 21,
        date: 1433626818487,
        message: 'Ba, daa. De mult am asteptat asa ceva. Serios acuma!',
        user : {
          id: 3,
          name: 'Claudiu Filip',
          avatar: 'http://lorempixel.com/g/50/50/'

        }
      }
    ];


  });
