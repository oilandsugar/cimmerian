angular.module('cimmerian-app', ['ui.router']);

angular.module('cimmerian-app').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
      templateUrl: "cimmerian-app/partials/stories.html",
      controller: function($scope) {
        $scope.stories = [
          {
            name: 'projet 1',
            date: '2015 01 02',
    	      duration: "25 minutes",
    	      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
    	      type: 'video'
          }
        ];
      }
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "cimmerian-app/partials/about.html"
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});
