angular.module('alt.user', [])
  .controller(
  'UserCtrl',
  function($scope, Auth) {
    //Auth.check();
    $scope.user = {
      name: 'Elvis Presley',
      avatar: 'http://lorempixel.com/g/50/50/',
      image: 'http://lorempixel.com/g/600/400',
      description: 'Nine Inch Nails'
    };

  });
