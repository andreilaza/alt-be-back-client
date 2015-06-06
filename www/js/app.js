// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('alt', [
  'ionic',
  'ngCordova',
  'ngResource',
  'ngStorage',

  'common.services.auth',
  'common.directives.comments',

  'alt.tour',
  'alt.user',
  'alt.event',
  'alt.tabs',
  'alt.login',
  'alt.newsfeed',
  'alt.newsfeed.sidemenu',
  'alt.events',
  'alt.scanner',
  'alt.ranking',
  'alt.profile'

])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })
  .constant('constants', {
    apiBaseUrl: 'http://10.10.10.163:3000'
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('login', {
        url: "/login",
        templateUrl: "js/login/login.html",
        controller: "LoginCtrl"
      })

      .state('tour', {
        url: '/tour',
        templateUrl: 'js/tour/tour.html',
        controller: 'TourCtrl'
      })

      .state('tab', {
        url: '/tab',
        abstract: true,

        templateUrl: 'js/tabs/tabs.html',
        controller: 'TabsCtrl'
      })

      .state('tab.events', {
        abstract: true,

        views: {
          'tab-events': {
            template: '<ion-nav-view animation="slide-left-right"></ion-nav-view>'
          }
        }

      })
      .state('tab.events.list', {
        url: '/events',
        cache: false,
        templateUrl: 'js/events/events.html',
        controller: 'EventsCtrl',
        resolve: {
          events: function(Event) {
            return Event.query().$promise;
          }
        }

      })
      .state('tab.events.details', {
        url: '/events/:id',
        cache: false,
        templateUrl: 'js/event/event.html',
        controller: 'EventCtrl',
        resolve: {
          event: function(Event, $stateParams) {
            return Event.get({id:$stateParams.id}).$promise;
          }
        }

      })


      .state('tab.newsfeed', {
        abstract: true,
        views: {
          'tab-newsfeed': {
            templateUrl: 'js/newsfeed/menu.html',
            controller: 'SideMenuCtrl'
          }
        }
      })
      .state('tab.newsfeed.list', {
        url: '/newsfeed/:type',
        templateUrl: 'js/newsfeed/newsfeed.html',
        controller: 'NewsfeedCtrl'
      })
      .state('tab.newsfeed.event', {
        url: '/event/:id',
        templateUrl: 'js/event/event.html',
        controller: 'EventCtrl',
        resolve: {
          event: function(Event, $stateParams) {
            return Event.get({id:$stateParams.id}).$promise;
          }
        }
      })
      .state('tab.newsfeed.user', {
        url: '/user/:id',
        templateUrl: 'js/user/user.html',
        controller: 'UserCtrl'
      })

      .state('tab.scanner', {
        url: '/scanner',
        cache: false,
        views: {
          'tab-scanner': {
            templateUrl: 'js/scanner/scanner.html',
            controller: 'ScannerCtrl'
          }
        }
      })

      .state('tab.ranking', {
        abstract: true,
        views: {
          'tab-ranking': {
            template: '<ion-nav-view animation="slide-left-right"></ion-nav-view>'
          }
        }
      })

      .state('tab.ranking.list', {
        url: '/ranking',
        templateUrl: 'js/ranking/ranking.html',
        controller: 'RankingCtrl'
      })
      .state('tab.ranking.user', {
        url: '/ranking/:id',
        templateUrl: 'js/user/user.html',
        controller: 'UserCtrl'
      })


      .state('tab.profile', {
        abstract: true,
        views: {
          'tab-profile': {
            template: '<ion-nav-view animation="slide-right-left"></ion-nav-view>'
          }
        }
      })

      .state('tab.profile.details', {
        url: '/profile/:id',
        templateUrl: 'js/profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('tab.profile.ranking', {
        url: '/profile-ranking',
        templateUrl: 'js/ranking/ranking.html',
        controller: 'RankingCtrl'
      });




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
