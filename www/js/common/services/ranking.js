/**
 * Created by claudiu on 07.06.15.
 */
angular.module('alt')
  .factory('Ranking', function($resource, constants) {
    return $resource(constants.apiBaseUrl + '/rank/:id',
      { id: '@_id' },
      {   update: {
        method: 'PUT'
      }
      }
    );
  })
  .service('RankingService', function (Feed, $q) {

  });