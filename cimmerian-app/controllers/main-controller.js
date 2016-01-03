(function () {
    'use strict';

    angular
        .module('cimmerian-app')
        .controller("MainController", ['$rootScope', mainCtrlFunc]);

    function mainCtrlFunc($rootScope){
      var vm = this;
      vm.title = 'Cimmerian';

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.bodyClass = toState.name;
      });

      vm.getClass = function() {
        return $rootScope.bodyClass;
      };
  };

})();
