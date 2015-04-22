'use strict';

/**
 * @ngdoc function
 * @name expenserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expenserApp
 */
angular.module('expenserApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
