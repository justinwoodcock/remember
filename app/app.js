'use strict';

var remember = angular.module('remember', [
    'ui.router',
    'ui.bootstrap',
    'restangular'
]);

remember.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('template', {
        url: '/template',
        views: {
            header: {
                templateUrl: '/components/header/index.html'
            },
            content: {
                templateUrl: '/components/_template/index.html',
                controller: 'TemplateController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    });

    $urlRouterProvider.otherwise('template');
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
