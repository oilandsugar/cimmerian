(function () {
    'use strict';

    angular
        .module('cimmerian-app')
        .controller("MainController", ['$rootScope', mainCtrlFunc]);

    function mainCtrlFunc($rootScope, $stateParams){
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
