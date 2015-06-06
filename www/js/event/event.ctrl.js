angular.module('alt.event', [])
  .controller(
  'EventCtrl',
  function($scope, event, Auth) {
    //Auth.check();
    console.log(event);
    $scope.event = event;

    $scope.event.comments = [
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
    $scope.attend = function (event) {

    };

  });
