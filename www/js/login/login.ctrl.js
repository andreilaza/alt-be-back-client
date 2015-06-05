angular.module('alt.login', [])
	.controller(
		'LoginCtrl', 
		function($scope, $cordovaOauth, $localStorage, $location) {
		    $scope.login = function() {
		        $cordovaOauth.facebook("793189997454578", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
		            $localStorage.accessToken = result.access_token;
		            $location.path("/profile");
		        }, function(error) {
		            // alert("There was a problem signing in!  See the console for logs");
		            alert(error);
		        });
		    };
		});
