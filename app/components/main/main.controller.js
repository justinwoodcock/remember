'use strict';

remember.controller('MainController', ['$scope', 'parallaxHelper', '$http', '$sce', '$timeout',
    function($scope, parallaxHelper, $http, $sce, $timeout) {
        $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
        $scope.subscribe = function() {
            var url = '//calvarychapelchronicles.us9.list-manage.com/subscribe/post-json?u=9139de77d7334703758b12ab1&id=42cded80a4&EMAIL='+$scope.email+'&c=JSON_CALLBACK';
            $http.jsonp(url).success(function(data, status, headers, config) {
                setSubmitted();
                if(data.result === 'success') {
                    $scope.result = data.result;
                } else {
                    $scope.result = 'danger';
                }
                $scope.message = data.msg;
            }).error(function(data, status, headers, config) {
                setSubmitted();
                $scope.result = 'danger';
                $scope.message = data.msg;
            });
        }
        function setSubmitted() {
            $scope.submitted = true;
            $timeout(function() {
                $scope.submitted = false;
            }, 10000);
        }
    }
]);
