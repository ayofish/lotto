'use strict';

/**
 * @ngdoc service
 * @name expenserApp.initTables
 * @description
 * # initTables
 * Service in the expenserApp.
 */
angular.module('expenserApp')
    .service('initTables', ['const_db', '$webSql', function(const_db, $webSql) {
        var settings = {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "created": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP" // default value
            },
            "setting": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "value": {
                "type": "TEXT",
                "null": "NOT NULL"
            }
        };
        var expense_categories = {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "created": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP" // default value
            },
            "label": {
                "type": "TEXT",
                "null": "NOT NULL"
            }
        };
        var income_categories = {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "created": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP" // default value
            },
            "label": {
                "type": "TEXT",
                "null": "NOT NULL"
            }
        };

        var expenseCategories = [
            'food',
            'utilities',
            'transportation',
            'car',
            'other'
        ];

        var incomeCategories = [
            'salary',
            'sale',
            'services',
            'loan',
            'gift',
            'other'
        ];
        var income = {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "created": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP" // default value
            },
            "amount": {
                "type": "INTEGER",
                "null": "NOT NULL"
            },
            "memo": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "date": {
                "type": "DATE",
                "null": "NOT NULL"
            },
            "income_category": {
                "type": "INTEGER",
                "null": "NOT NULL"
            }
        };

        var expense = {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "created": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP" // default value
            },
            "amount": {
                "type": "INTEGER",
                "null": "NOT NULL"
            },
            "memo": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "date": {
                "type": "DATE",
                "null": "NOT NULL"
            },
            "expense_category": {
                "type": "INTEGER",
                "null": "NOT NULL"
            }
        };
        // AngularJS will instantiate a singleton by calling "new" on this function
        var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
        this.run = function() {
            var that = this;
            db.createTable('settings', settings);
            db.createTable('expense_categories', expense_categories);
            db.createTable('income_categories', income_categories);
            db.createTable('income', income);
            db.createTable('expense', expense);
            db.selectAll('expense_categories').then(function(results) {
                if (results.rows.length == 0) {
                    that.insertExpenseCategories();
                }
            });
            db.selectAll('income_categories').then(function(results) {
                if (results.rows.length == 0) {
                    that.insertIncomeeCategories();
                }
            });

        };

        this.insertExpenseCategories = function() {
            for (var i = 0; i < expenseCategories.length; i++) {
                db.insert('expense_categories', {
                    "label": expenseCategories[i]
                }).then(function(results) {
                    // console.log(results.insertId);
                });
            }
        };

        this.insertIncomeeCategories = function() {
            for (var i = 0; i < incomeCategories.length; i++) {
                db.insert('income_categories', {
                    "label": incomeCategories[i]
                }).then(function(results) {
                    // console.log(results.insertId);
                });
            }
        };

    }]);
