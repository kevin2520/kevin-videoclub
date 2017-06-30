(function() {
    'use strict';

    angular.module('videoClubApp')
        .directive('onReadImg', onReadImg);

    /* @ngInject */
    function onReadImg($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {
            var fn = $parse(attrs.onReadImg);
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();
                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {
                            //leer imagen ....
                            $fileContent: onLoadEvent.target.result
                        });
                    });
                };
                reader.readAsDataURL((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    }
})();