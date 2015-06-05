angular.module('alt.login', [])
	.controller(
		'LoginCtrl', 
		function($scope, $cordovaOauth, $localStorage, $state, $http) {
		    
		    $scope.facebookLogin = function() {
		        $cordovaOauth.facebook("793189997454578", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
		            $localStorage.accessToken = result.access_token;

		            // Redirect success
		            // $state.go('newsfeed')
		            
		            // check token and api 
		            if($localStorage.hasOwnProperty("accessToken") === true) {
			            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
			                alert(JSON.stringify(result.data));
			            }, function(error) {
			                alert("There was a problem getting your profile.  Check the logs for details.");
			                alert(error)
			            });
			        } else {
			            alert("Not signed in");
			            $state.go('login');
			        }

		        }, function(error) {
		            // alert("There was a problem signing in!");
		            alert(error);
		        });
		    };

		    $scope.googleLogin = function() {
		        $cordovaOauth.google("700914010694-o76umqf1gl8njev5m8mag49sic5bnuoa.apps.googleusercontent.com", ["email"]).then(function(result) {

					alert(JSON.stringify(result))

		            // Redirect success

		        }, function(error) {
		            // alert("There was a problem signing in!");
		            alert(error);
		        });
		    };
		});
