angular.module('alt')
  .factory('Member', function($resource, constants) {
    return $resource(constants.apiBaseUrl + '/members/:id',
      { id: '@_id' },
      {
      	check: {
      		method: 'POST',
      		params: {
      			id: 'check'
      		}
      	},
  		update: {
        	method: 'PUT'
      	}
      }
    );
  });