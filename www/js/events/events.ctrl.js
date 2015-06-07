angular.module('alt.events', [])
  .controller(
  'EventsCtrl',
  function($scope, $state, events, EventService, Auth) {
    //Auth.check();
    //console.log(events);
    $scope.events = events;
    //
    //
    $scope.attend = function (event) {
      EventService.attend(event._id, Auth.getMemberId()).then(function(data) {

        event.attending.push(Auth.getMemberId());

      }, function(error) {
        alert(JSON.stringify(error));
      });
    };

    $scope.isAttending = function (event) {
      var index = event.attending.indexOf(Auth.getMemberId());
      return index !== -1 ? true : false;
    };

    $scope.goToEvent = function (id) {
      $state.go('tab.events.details', {id: id});
    };

  });
