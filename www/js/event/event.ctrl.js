angular.module('alt.event', [])
  .controller(
  'EventCtrl',
  function($scope, event, EventService, Event, Auth) {
    //Auth.check();

    $scope.event = event;

    $scope.attend = function () {
      EventService.attend(event._id, Auth.getUser()._id).then(function(data) {

        event.attending.push(Auth.getUser()._id);

      }, function(error) {
        alert(JSON.stringify(error));
      });
    };

    $scope.isAttending = function (event) {
      var index = $scope.event.attending.indexOf(Auth.getUser()._id);
      return index !== -1 ? true : false;
    };

    $scope.commentSubmit = function (message) {
      EventService.addComment($scope.event._id, message, Auth.getUser()._id)
        .then(function (data) {
          $scope.event.comments = data.comments;
        });
    };

  });
