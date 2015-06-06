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
  .service('EventService', function (Event, $q) {

  });