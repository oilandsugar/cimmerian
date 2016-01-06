angular.module('cimmerian-app', ['ui.router']);

angular.module('cimmerian-app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "cimmerian-app/partials/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "cimmerian-app/partials/about.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "cimmerian-app/partials/contact.html"
    })
    .state('stories', {
      url: "/stories",
      templateUrl: "cimmerian-app/partials/stories.html"
    })
    .state('stories.single', {
        url: "/stories/{storyId}",
        templateUrl: 'stories.single.html',
        controller: function ($stateParams) {
        }
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "cimmerian-app/partials/about.html"
    });
});
