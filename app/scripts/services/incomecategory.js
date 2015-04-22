'use strict';

/**
 * @ngdoc service
 * @name expenserApp.incomeCategory
 * @description
 * # incomeCategory
 * Service in the expenserApp.
 */
angular.module('expenserApp')
  .service('incomeCategory', ['const_db', '$webSql', function(const_db, $webSql) {
  	var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
