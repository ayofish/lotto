'use strict';

/**
 * @ngdoc directive
 * @name checklistApp.directive:onEnter
 * @description
 * # onEnter
 */
angular.module('checklistApp')
    .directive('onEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });
