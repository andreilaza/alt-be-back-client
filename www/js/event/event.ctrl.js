angular.module('alt.event', [])
  .controller(
  'EventCtrl',
  function($scope, event, EventService, Notification, Event, Auth) {
    //Auth.check();

    $scope.event = event;

    $scope.attend = function () {
      EventService.attend(event._id, Auth.getMemberId()).then(function(data) {

        Notification.success('Event attend success');
        event.attending.push(Auth.getMemberId());

      }, function(error) {
        Notification.error('Event attend failed');
      });
    };

    $scope.isAttending = function (event) {
      var index = $scope.event.attending.indexOf(Auth.getMemberId());
      return index !== -1 ? true : false;
    };

    $scope.commentSubmit = function (message) {
      EventService.addComment($scope.event._id, message, Auth.getMemberId())
        .then(function (data) {
          $scope.event.comments = data.comments;
          Notification.success('Comment submit success');
        }, function (error) {
          Notification.error('Comment submit failed');

        });
    };

  });
