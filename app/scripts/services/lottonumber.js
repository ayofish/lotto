'use strict';

/**
 * @ngdoc service
 * @name miscApp.LottoNumber
 * @description
 * # LottoNumber
 * Factory in the miscApp.
 */
angular.module('lottoApp')
    .factory('LottoNumber', function() {
        // Service logic
        // ...

        var LottoNumber = function(num, min, max) {
            this.setMax(max);
            this.setMin(min);
            this.setNum(num);
            this.valid = false;
            this.num = null;
            this.min = 1;
            this.max = 42;
        };

        LottoNumber.prototype = {
            setNum: function(num) {
                if (typeof num != "undefined" && num != null && num != "" && num > 0) {
                    this.num = +num;
                    this.valid = true;
                } else {
                    this.valid = false;
                }
            },
            setMin: function(min) {
                if (typeof min != "undefined" && min != null && min != "" && min > 0) {
                    this.min = +min;
                    this.valid = true;
                } else {
                    this.valid = false;
                }
            },
            setMax: function(max) {
                if (typeof max != "undefined" && max != null && max != "" && max > 0) {
                    this.max = +max;
                    this.valid = true;
                } else {
                    this.valid = false;
                }
            },
            get: function() {
                return this.num;
            },
            getDisplay: function() {
                return this.num;
            }
        };

        // Public API here
        return LottoNumber;
    });
