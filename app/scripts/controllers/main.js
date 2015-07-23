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
        $scope.numbers = {
            winning: [{
                val: null
            }, {
                val: null
            }, {
                val: null
            }, {
                val: null
            }, {
                val: null
            }, {
                val: null
            }],
            mynumbers: [
            	[]
            ],
            numMynumbers: 6
        };
        $scope.submitWinningNumbers = function($event){
        	NumberChecker.setNumbers(_.map($scope.numbers.winning, function(obj){return obj.val;}));
        	$location.path('mynumbers');
        };
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

    }]);
