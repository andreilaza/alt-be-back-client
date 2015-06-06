angular.module('alt.event', [])
  .controller(
  'EventCtrl',
  function($scope, Auth) {
    //Auth.check();
    $scope.event = {
      title: 'Pretty Hate Machine',
      avatar: 'http://lorempixel.com/g/50/50/',
      image: 'http://lorempixel.com/g/600/400',
      description: 'Nine Inch Nails'
    };


    $scope.attend = function (event) {

    };

  });
