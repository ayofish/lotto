'use strict';

/**
 * @ngdoc directive
 * @name lottoApp.directive:lottoentry
 * @description
 * # lottoentry
 */
angular.module('lottoApp')
    .directive('lottoentry', function() {
        return {
            templateUrl: 'views/lottoentry.html',
            restrict: 'E',
            scope: {
                index: "@",
                entry: "=",
                heading: "@",
                hideclose: "@",
                removeEntry: "="
            },
            link: function postLink($scope, element, attrs) {
                //set the initial selected number

                function setSelectedEntryNumberCount(count) {
                    element.find("button").removeClass("btn-primary");
                    var selectedButton = element.find("button").filter(function() {
                        return +this.innerText === count;
                    }).addClass("btn-primary");
                }

                function setNumberOfEntryInputs(count) {
                    $scope.entry.numbers = [];
                    for (var i = 0; i < count; i++) {
                        $scope.entry.numbers.push({
                            val: null,
                            win: false
                        });
                    }
                }

                $scope.onClickClearNumbers = function(){
                    setNumberOfEntryInputs($scope.entry.count);
                }

                $scope.onClickRemoveNumbers = function(){
                    $scope.removeEntry($scope.index);
                }

                setSelectedEntryNumberCount($scope.entry.count);
                setNumberOfEntryInputs($scope.entry.count);

                $scope.onClickLottoEntryNumberCount = function(count) {
                    this.entry.count = count;
                    setSelectedEntryNumberCount(count);
                    setNumberOfEntryInputs(count);
                }
            }
        };
    });
