'use strict';

/**
 * @ngdoc function
 * @name lottoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lottoApp
 */
angular.module('lottoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
