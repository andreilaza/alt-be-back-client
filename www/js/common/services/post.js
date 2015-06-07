angular.module('alt')
  .factory('Post', function($resource, constants, Notification) {
    return $resource(constants.apiBaseUrl + '/post/:id',
      { id: '@_id' },
      {   update: {
        method: 'PUT'
      }
      }
    );
  })
  .service('PostService', function (Post, $http, Notification, constants) {
    this.create = function (message, memberId) {
      return $http.post(constants.apiBaseUrl + '/post', {
        message: message,
        memberId: memberId
      })
        .then(function(data) {
          Notification.success('Post created');
          return data;
        }, function(error) {
          Notification.error(error);
          return error;
        });
    };

    this.addComment = function (postId, message, memberId) {
      return $http.post(constants.apiBaseUrl + '/post/comment', {
        postId: postId,
        message: message,
        memberId: memberId
      }).then(function(result) {
        Notification.success('Comment submitted');
        return new Post(result.data);
      }, function(error) {
        Notification.error(error);
        return error;
      });
    };

  });