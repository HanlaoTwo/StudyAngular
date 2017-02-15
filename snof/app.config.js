/**
     * Created by han on 2017/2/13.
     */
'use strict';

angular.module('testApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/1', {
                templateUrl: 'module1/module1.html',
                controller: 'Module1Ctrl',
                controllerAs: 'vm'
            })
            .when('/2', {
                templateUrl: 'module2/module2.html'
            })
            .otherwise('/index');
    }
]);