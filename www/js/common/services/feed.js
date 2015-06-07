angular.module('alt')
  .factory('Feed', function($resource, constants) {
    return $resource(constants.apiBaseUrl + '/feed/:id',
      { id: '@_id' },
      {   update: {
            method: 'PUT'
          }
      }
    );
  })
  .service('FeedService', function (Event, $q) {

  });