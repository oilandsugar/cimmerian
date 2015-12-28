angular.module('cimmerian-app', ['ui.router'])

angular.module('cimmerian-app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "partials/about.html"
    })
    .state('stories', {
      url: "/stories",
      templateUrl: "partials/stories.html",
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
      templateUrl: ""
    });
});
