'use strict';

/**
 * @ngdoc service
 * @name expenserApp.expenseCategory
 * @description
 * # expenseCategory
 * Service in the expenserApp.
 */
angular.module('expenserApp')
  .service('expenseCategory', ['const_db', '$webSql', function(const_db, $webSql) {
  	var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getAll = function(){
    	return db.selectAll('expense_categories');
    };

    this.get = function(id){
    	return db.select('expense_categories', {
    		'id': {
    			value: id,
    			operator: '='
    		}
    	});
    };

  }]);