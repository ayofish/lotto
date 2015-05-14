'use strict';

/**
 * @ngdoc overview
 * @name lottoApp
 * @description
 * # lottoApp
 *
 * Main module of the application.
 */
angular
    .module('lottoApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/mynumbers', {
              templateUrl: 'views/mynumbers.html',
              controller: 'MynumbersCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }]);
