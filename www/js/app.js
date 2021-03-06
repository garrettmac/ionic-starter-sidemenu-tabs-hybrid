// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })




// "menuContent" lies inside the sidemenu
// it needs to be abstract because you want to 
//change the tab content

//###########DISCOVER sidmenu####################
.state('app.discover', {
    url: "/discover",
    views: {
      'menuContent': {
        templateUrl: "templates/discover.html"
      }
    }
  })
  // .state('app.discover', {
  //   url: "/discover",
  //   abstract: true,
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/discover.html"
  //     }
  //   }
  // })
 //vvvvvvvvvvvvvvvvvvDISCOVER TABSvvvvvvvvvvvvvvvvvvvv
.state('app.discover.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "templates/home.html"
      }
    }
  })
 
.state('app.discover.activities', {
    
    url: "/activities",
    views: {
      'activities-tab': {
        templateUrl: "templates/activities.html"
      }
    }
  })

.state('app.discover.food', {
    
    url: "/food",
    views: {
      'food-tab': {
        templateUrl: "templates/food.html"
      }
    }
  })

.state('app.discover.nightlife', {
    
    url: "/nightlife",
    views: {
      'nightlife-tab': {
        templateUrl: "templates/nightlife.html"
      }
    }
  })

.state('app.discover.transportation', {
    
    url: "/transportation",
    views: {
      'transportation-tab': {
        templateUrl: "templates/transportation.html"
      }
    }
  })

  .state('app.discover.shop', {
    
    url: "/shop",
    views: {
      'shop-tab': {
        templateUrl: "templates/shop.html"
      }
    }
  })
  //^^^^^^^^^^^^^^^^^DISCOVER TABS^^^^^^^^^^^^^^^^^^
//###########DISCOVER sidmenu####################



//###########MAP sidmenu####################
  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html"
      }
    }
  })

  //vvvvvvvvvvvvvvvvvvMAP TABSvvvvvvvvvvvvvvvvvvvv
.state('app.map.map', {
    
    url: "/map",
    views: {
      'map-tab': {
        templateUrl: "templates/map.html"
      }
    }
  })
.state('app.map.hotspots', {
    
    url: "/hotspots",
    views: {
      'hotspots-tab': {
        templateUrl: "templates/hotspots.html"
      }
    }
  })
.state('app.map.favorites', {
    
    url: "/favorites",
    views: {
      'favorites-tab': {
        templateUrl: "templates/favorites.html"
      }
    }
  })
   //^^^^^^^^^^^^^^^^^MAP TABS^^^^^^^^^^^^^^^^^^
  //###########MAP sidmenu####################
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/discover');
});
