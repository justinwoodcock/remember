'use strict';

remember.controller('MainController', ['$scope', 'parallaxHelper', 
    function($scope, parallaxHelper) {
        $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
    }
]);