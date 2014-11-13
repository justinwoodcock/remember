'use strict';

var remember = angular.module('remember', [
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'duParallax'
]);

remember.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('template', {
        url: '/',
        views: {
            header: {
                templateUrl: '/components/header/index.html'
            },
            content: {
                templateUrl: '/components/main/index.html',
                controller: 'MainController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});

remember.config(['RestangularProvider',
    function(RestangularProvider) {
        var apiUrl = 'https://api.ui-base.dev';
        RestangularProvider.setBaseUrl(apiUrl);
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData = data.data;
            return extractedData;
        });
    }
]);
