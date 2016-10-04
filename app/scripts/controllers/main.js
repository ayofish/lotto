'use strict';

/**
 * @ngdoc function
 * @name lottoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lottoApp
 */
angular.module('lottoApp')
    .controller('MainCtrl', ['$scope', '$location', 'NumberChecker', function($scope, $location, NumberChecker) {
        $scope.entries = [{
            count: 6,
            numbers: []
        }];
        $scope.winningNumbers = {
            count: 6,
            numbers: []
        };
        $scope.submitWinningNumbers = function($event) {
            NumberChecker.setNumbers(_.map($scope.entries.numbers, function(obj) {
                return obj.val;
            }));
            $location.path('mynumbers');
        };

        $scope.removeEntry = function(index){
            debugger;
        };
    }]);
