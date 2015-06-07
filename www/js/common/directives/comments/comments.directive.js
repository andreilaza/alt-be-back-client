angular.module('common.directives.comments', [])
  .directive('comments', function() {
      return {
        restrict: 'E',
        templateUrl: 'js/common/directives/comments/comments.html',
        scope: {
          comments: '=source',
          submit: '='
        },
        controller: function ($scope) {

          $scope.newMessage = '';

          $scope.submitWrapper = function (message) {

            $scope.newMessage = '';
            $scope.submit(message);
          }
        }
      }
  });