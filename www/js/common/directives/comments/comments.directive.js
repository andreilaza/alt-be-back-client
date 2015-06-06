angular.module('common.directives.comments', [])
  .directive('comments', function() {
      return {
        restrict: 'E',
        templateUrl: 'js/common/directives/comments/comments.html',
        scope: {
          comments: '=source'
        },
        controller: function ($scope) {

        },
        link: function (scope, element, attrs) {

        }
      }
  });