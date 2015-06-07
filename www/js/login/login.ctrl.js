angular.module('alt.login', [])
	.controller(
		'LoginCtrl', 
		function($scope, $cordovaOauth, Auth) {

			Auth.check('redirect');

		    $scope.facebookLogin = function() {
		        $cordovaOauth.facebook(
		        	"793189997454578", 
		        	[	
		        		"email", 
		        		"read_stream", 
		        		"user_website", 
		        		"user_location", 
		        		"user_relationships"
	        		]
	      		).then(function(response){
	      			Auth.login('facebook', response);
	      		}, Auth.error);
		    };

		    $scope.googleLogin = function() {
		        $cordovaOauth.google(
		        	"700914010694-o76umqf1gl8njev5m8mag49sic5bnuoa.apps.googleusercontent.com", 
		        	[
		        		"email"
	        		]
	      		).then(function(response){
	      			Auth.login('google', response);
	      		}, Auth.error);
		    };
		});	
