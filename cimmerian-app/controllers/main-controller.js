(function () {
    'use strict';

    angular
        .module('cimmerian-app')
        .controller("MainController", ['$rootScope', '$stateParams', 'stories', mainCtrlFunc]);

    function mainCtrlFunc($rootScope, $stateParams, stories){
      var vm = this;
      vm.title = 'Cimmerian';

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.bodyClass = toState.name;
      });

      console.log($stateParams.storyId);

      vm.getClass = function() {
        return $rootScope.bodyClass;
      };
  };

})();
