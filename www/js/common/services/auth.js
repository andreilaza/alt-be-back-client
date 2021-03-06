angular.module('common.services.auth', [])
  .factory('Auth', function($localStorage, $http, $state, Notification, Member) {
    var user;

    function login(type, response) {

      // Save access Token
      $localStorage.accessToken = response.access_token;

      if(type === 'facebook') {
        $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.accessToken, fields: "id, email,name,picture", format: "json" }}).then(function(result) {
            user = {
              credentials: response,
              member: {
                accessKey: $localStorage.accessToken,
                type: 'facebook',
                email: result.data.email,
                externalId: result.data.id,
                avatar: result.data.picture.data.url || '',
                name: result.data.name
              }
            }

            Member.check(user.member, function(response) {
              if(response.status) {
                if(response.data.firstLogin) {
                  user.member._id = response.data._id;
                  $state.go('tour');
                } else {
                  user.member._id = response.data._id;
                  $state.go('tab.newsfeed.list');
                }
              } else {
                errorHandler(response.data);
              }
            });

        }, function(error) {
            errorHandler("There was a problem getting your profile.");
            // alert(error)
        });

      } else {

        $http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + $localStorage.accessToken).then(function(result) {
          user = {
            credentials: response,
            member: {
              accessKey: $localStorage.accessToken,
              type: 'google',
              email: result.data.email,
              externalId: result.data.id,
              avatar: result.data.picture || '',
              name: result.data.name
            }
          }

          Member.check(user.member, function(response) {
            if(response.status) {
              if(response.data.firstLogin) {
                user.member._id = response.data._id;
                $state.go('tour');
              } else {
                user.member._id = response.data._id;
                $state.go('tab.feeds.list');
              }
            } else {
              errorHandler(response.data);
            }
          });

        }, function(error) {
            errorHandler("There was a problem getting your profile.");
        });
      }
    }

    function error(error) {
      // alert("There was a problem signing in!");
      errorHandler(error);
    }

    function check(redirect) {
      if($localStorage.hasOwnProperty("accessToken") !== true) {
          if(typeof(redirect) === 'undefined') {
            errorHandler("Not signed in");
            $state.go('login');
          }
      } else {
        if(typeof(redirect) !== 'undefined') {
          Member.check({ accessKey: $localStorage.accessToken }, function(response) {
            if(response.status) {
              user = {
                member: response.data
              };
              $state.go('tab.feeds.list');
            } else {
              delete $localStorage.accessToken;
              errorHandler('You are not a member anymore')
            }
          }, function(error) {
            errorHandler(JSON.stringify(error))
          });
        }
      }
    }

    function errorHandler(error) {
      Notification.error(error);
    }

    function getMemberId() {
      if (!user) {
        Notification.error('GetMemberID failed.');
        return '55743aad7223cdfd379490bd';
      }
      return user.member._id;
    }

    function getUser() {
      return user || {
          _id : '55743aad7223cdfd379490bd'
        };
    }

    return {
      login: login,
      error: error,
      check: check,
      getMemberId: getMemberId,
      getUser: getUser
    };

  });
