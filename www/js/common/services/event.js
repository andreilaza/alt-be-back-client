angular.module('alt')
  .factory('Event', function($resource, constants) {
    return $resource(constants.apiBaseUrl + '/events/:id',
      { id: '@_id' },
      {   update: {
            method: 'PUT'
          }
      }
    );
  })
  .service('EventService', function (Event, $http, constants) {
    this.attend = function (eventId, memberId) {
      return $http.post(constants.apiBaseUrl + '/events/go', {
        eventId: eventId,
        memberId: memberId
      });


    };
    this.checkin = function (eventId, memberId) {

      return $http.post(constants.apiBaseUrl + '/checkin', {
        id: eventId,
        memberId: memberId
      });
    };

    this.addComment = function (eventId, message, memberId) {
      return $http.post(constants.apiBaseUrl + '/events/comment', {
        eventId: eventId,
        message: message,
        memberId: memberId
      }).then(function(result) {
        return new Event(result.data);
      });
    };
  });