'use strict';

/**
 * @ngdoc function
 * @name expenserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expenserApp
 */
angular.module('expenserApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
