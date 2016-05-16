// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.lists', {
      url: '/lists',
      views: {
        'menuContent': {
          templateUrl: 'templates/lists.html',
          controller: 'ListsCtrl'
        }
      }
    })

    .state('app.ink', {
      url: '/ink',
      views: {
        'menuContent': {
          templateUrl: 'templates/ink.html',
          controller: 'InkCtrl'
        }
      }
    })

    .state('app.motion', {
      url: '/motion',
      views: {
        'menuContent': {
          templateUrl: 'templates/motion.html',
          controller: 'MotionCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.schedule-main', {
      url: '/schedule-main',
      views: {
        'menuContent': {
          templateUrl: 'templates/schedule-main.html',
          controller: 'MainScheduleCtrl'
        }
      }
    })

    .state('app.schedule-makercon', {
      url: '/schedule-makercon',
      views: {
        'menuContent': {
          templateUrl: 'templates/schedule-makercon.html',
          controller: 'MakerConScheduleCtrl'
        }
      }
    })

    .state('app.schedule-linux', {
      url: '/schedule-linux',
      views: {
        'menuContent': {
          templateUrl: 'templates/schedule-linux.html',
          controller: 'LinuxScheduleCtrl'
        }
      }
    })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        }
      }
    })

    .state('app.extensions', {
      url: '/extensions',
      views: {
        'menuContent': {
          templateUrl: 'templates/extensions.html',
          controller: 'ExtensionsCtrl'
        }
      }
    })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })

    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html'
        }
      }
    })

    /*.state('app.components', {
      url: '/components',
      views: {
        'menuContent': {
          templateUrl: 'templates/components.html'
        }
      }
    })*/
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule-main');
});


app.run(function ($rootScope, $ionicPopup) {
  $rootScope.showEventDetails = function (event) {
    if (!event.abstract) {
      $ionicPopup.alert({
        title: 'Error',
        template: 'No info available for this session :('
      });
      return;
    }
    $ionicPopup.alert({
      title: event.title,
      template: event.abstract
    });
  }
});
