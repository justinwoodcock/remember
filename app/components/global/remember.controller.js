'use strict';

remember.controller('RememberController', ['$scope', '$rootScope', 'parallaxHelper',
    function($scope, $rootScope, parallaxHelper) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $scope.state = toState;
        });
    }
]);