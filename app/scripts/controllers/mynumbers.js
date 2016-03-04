'use strict';

/**
 * @ngdoc function
 * @name lottoApp.controller:MynumbersCtrl
 * @description
 * # MynumbersCtrl
 * Controller of the lottoApp
 */
angular.module('lottoApp')
    .controller('MynumbersCtrl', ['$scope', 'NumberChecker', function($scope, NumberChecker) {
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
            mynumbers: [],
            numMynumbers: 6
        };
        var addNumberSet = function() {
            var numberSet = [];
            for (var i = 0; i < $scope.numbers.numMynumbers; i++) {
                numberSet.push({
                    val: null
                });
            }
            $scope.numbers.mynumbers.push(numberSet);
        };
        var checkMyNumbers = function() {
            for (var i = 0; i < $scope.numbers.mynumbers.length; i++) {
                for (var x = 0; x < $scope.numbers.mynumbers[i].length; x++) {
                    NumberChecker.setNumbersToCheck(_.map($scope.numbers.mynumbers[i], function(obj) {
                        return obj.val;
                    }));
                    var matching = NumberChecker.getMatching();
                    for (var z = 0; z < $scope.numbers.mynumbers[i].length; z++) {
                        if (matching.indexOf($scope.numbers.mynumbers[i][z].val) != -1) {
                            $scope.numbers.mynumbers[i][z].win = true;
                        }
                    }
                }
            }

        };
        $scope.checkMyNumbers = checkMyNumbers;
        $scope.addNumberSet = addNumberSet;
        $scope.addNumberSet();
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
