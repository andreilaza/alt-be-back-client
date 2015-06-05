angular.module('common.services.auth', [])
  .factory('Auth', function($localStorage, $http, $state) {
    var user;

    function login(response) {

      // Save access Token
      $localStorage.accessToken = response.access_token;

      http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
          user = result.data;
          user.credentials = response;
          alert(JSON.stringify(result.data));

      }, function(error) {
          // alert("There was a problem getting your profile.");
          alert(error)
      });

      // Get google profile

      // Call our api

        // Redirect success
        // $state.go('newsfeed')

        // Redirect first time
        // $state.go('tour', { step: first })
    }

    function error(error) {
      // alert("There was a problem signing in!");
      alert(error);
    }

    function check() {
      if($localStorage.hasOwnProperty("accessToken") !== true) {
          alert("Not signed in");
          $state.go('login');
      }
    }

    function getUser() {
      return user;
    }

    return {
      login: login,
      error: error,
      check: check,
      getUser: getUser
    };

  });
