angular.module('alt')
  .factory('Post', function($resource, constants) {
    return $resource(constants.apiBaseUrl + '/post/:id',
      { id: '@_id' },
      {   update: {
        method: 'PUT'
      }
      }
    );
  })
  .service('PostService', function (Post, $http, constants) {
    this.create = function (message, memberId) {
      return $http.post(constants.apiBaseUrl + '/post', {
        message: message,
        memberId: memberId
      });
    };
    this.addComment = function (postId, message, memberId) {
      return $http.post(constants.apiBaseUrl + '/post/comment', {
        postId: postId,
        message: message,
        memberId: memberId
      });
    };

  });