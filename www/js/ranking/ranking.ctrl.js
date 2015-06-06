angular.module('alt.ranking', [])
  .controller(
  'RankingCtrl',
  function($scope, $state, Auth) {

    //Auth.check();

    $scope.users = [
      {
        id: 1,
        name: 'Claudiu Filip',
        points: 1400
      },
      {
        id: 1,
        name: 'Andrei Laza',
        points: 1300
      },
      {
        id: 1,
        name: 'Bogdan Negrescu',
        points: 1200
      },
      {
        id: 1,
        name: 'Andrei Demian',
        points: 1100
      },
      {
        id: 1,
        name: 'Alex Popa',
        points: 100
      },
      {
        id: 1,
        name: 'Nicolae Olteanu',
        points: 900
      },
      {
        id: 1,
        name: 'Razvan Stan',
        points: 500
      },
      {
        id: 1,
        name: 'Lia Radoi',
        points: 300
      }
    ];

    $scope.goToUser = function (id) {
      $state.go('tab.ranking.user', {id: id});
    };
  });
