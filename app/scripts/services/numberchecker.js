'use strict';

/**
 * @ngdoc service
 * @name lottoApp.NumberChecker
 * @description
 * # NumberChecker
 * Service in the lottoApp.
 */
angular.module('lottoApp')
    .service('NumberChecker', function() {
        
        this.arrNumbers = null;
        this.arrNumbersToCheck = null;
        this.setNumbers = function(arrNumbers) {
            if (_.isArray(arrNumbers) && _.every(arrNumbers, _.isNumber)) {
                this.arrNumbers = arrNumbers;
            }
        };

        this.setNumbersToCheck = function(arrNumbersToCheck) {
            if (_.isArray(arrNumbersToCheck) && _.every(arrNumbersToCheck, _.isNumber)) {
                this.arrNumbersToCheck = arrNumbersToCheck;
            }
        };

        this.getMatching = function() {
            var results = new Array();
            if (this.arrNumbersToCheck != null && this.arrNumbers != null) {
                /*var arr = this.arrNumbers.concat(this.arrNumbersToCheck);
			var sorted_arr = arr.sort();
			for (var i = 0; i < arr.length - 1; i++) {
			    if (sorted_arr[i + 1] == sorted_arr[i]) {
			        results.push(sorted_arr[i]);
			    }
			}*/
                results = _.intersection(this.arrNumbersToCheck, this.arrNumbers).sort();
            }
            return results;
        };
    });
