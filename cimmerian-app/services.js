(function () {
    'use strict';

    angular
      .module('cimmerian-app')
      .service('stories', function() {
        var vm = this;

        vm.stories = [
          {
            name: 'story no.1',
            date: '2015-01-02',
            duration: "25:00",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
            intention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
            type: 'video',
            video: '/urltovideo',
            photos: [
              {
                id: 1
                url: '/urltofile',
                caption: 'caption'
              },
              {
                id: 2
                url: '/urltofile',
                caption: 'caption'
              },
              {
                id: 3
                url: '/urltofile',
                caption: 'caption'
              }
            ],
            btsPhotos: [
              {
                id: 1
                url: '/urltofile',
                caption: 'caption'
              },
              {
                id: 2
                url: '/urltofile',
                caption: 'caption'
              },
              {
                id: 3
                url: '/urltofile',
                caption: 'caption'
              }
            ]
          }
        ];

        vm.list = function(nb) {
          return vm.stories;
        }

      });

})();
