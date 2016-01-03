(function () {
    'use strict';

    angular
      .module('cimmerian-app')
      .service('stories', function() {
        var vm = this;

        vm.stories = [
          {
            name: 'projet 1',
            date: '2015 01 02',
            duration: "25 minutes",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
            type: 'video'
          }
        ];

        vm.list = function(nb) {
          return vm.stories;
        }

      });

})();
