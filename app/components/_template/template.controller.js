'use strict';

remember.controller('TemplateController', ['$scope', 'parallaxHelper',
    function($scope, parallaxHelper) {
        $scope.background = parallaxHelper.createAnimator(-0.3, 50, -50);
    }
]);