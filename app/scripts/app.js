'use strict';

/**
 * @ngdoc overview
 * @name expenserApp
 * @description
 * # expenserApp
 *
 * Main module of the application.
 */
angular
    .module('expenserApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-websql',
        'ui.bootstrap'
    ]).run(['initTables', 'datepickerConfig', function(initTables, datepickerConfig) {
      initTables.run();
        // $('.nav a').on('click', function() {
        //     $(".btn-navbar").click(); //bootstrap 2.x
        //     $(".navbar-toggle").click() //bootstrap 3.x by Richard
        // });
    }])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/expense/:id?', {
                templateUrl: 'views/expense.html',
                controller: 'ExpenseCtrl'
            })
            .when('/income', {
                templateUrl: 'views/income.html',
                controller: 'IncomeCtrl'
            })
            .when('/account', {
                templateUrl: 'views/account.html',
                controller: 'AccountCtrl'
            })
            .when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).constant('const_db', {
      'name': 'expenser-test',
      'version': '0.1',
      'desc': 'expenser database',
      'size': (2*1024*1024)
    });
