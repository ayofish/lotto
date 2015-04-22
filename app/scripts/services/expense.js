'use strict';

/**
 * @ngdoc service
 * @name expenserApp.expense
 * @description
 * # expense
 * Service in the expenserApp.
 */
angular.module('expenserApp')
    .service('expense', ['const_db', '$webSql', '$filter', function(const_db, $webSql, $filter) {
        var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.create = function(data) {
            if (angular.isDefined(data)) {

                return db.insert('expense', {
                    //convert to integer first
                    "amount": +(data.amount.toFixed(2)) * 100,
                    "memo": data.memo,
                    //mm/dd/yyyy
                    "date": $filter('date')(data.date, 'M/dd/yyyy'),
                    "expense_category": data.category
                });
            }
        };
        this.update = function(data) {
            if (angular.isDefined(data)) {

                return db.update('expense', {
                    //convert to integer first
                    "amount": +(data.amount.toFixed(2)) * 100,
                    "memo": data.memo,
                    //mm/dd/yyyy
                    "date": $filter('date')(data.date, 'M/dd/yyyy'),
                    "expense_category": data.category
                }, {
                    id: data.id
                });
            }
        };

        this.get = function(id) {
            return db.select('expense', {
                'id': id
            });
        };
        this.formatExpenseObj = function(data){
        	return {
        		//convert to decimal again
        		"amount": data.amount * 0.01,
        		"memo": data.memo,
        		"date": $filter('date')(new Date(data.date), 'dd-MMMM-yyyy'),
        		"category": data.expense_category
        	};
        };

        this.del = function(id){
        	if(angular.isDefined(id) && id != null && id != ''){
        		return db.del('expense', {
        			id: id
        		});
        	}
        }

    }]);
