'use strict';

/**
 * @ngdoc function
 * @name expenserApp.controller:ExpenseCtrl
 * @description
 * # ExpenseCtrl
 * Controller of the expenserApp
 */
angular.module('expenserApp')
    .controller('ExpenseCtrl', ['$scope', 'expense', 'expenseCategory', '$routeParams', function($scope, expenseService, expenseCategory, $routeParams) {
        $scope.id = $routeParams.id;
        expenseCategory.getAll().then(function(results) {
            var categories = [];
            for (var i = 0; i < results.rows.length; i++) {
                categories.push(results.rows.item(i));
            }
            $scope.categories = categories;
        });

        if (angular.isDefined($scope.id)) {
            expenseService.get($scope.id).then(function(result) {
                if (result.rows.length > 0) {
                    $scope.expense = expenseService.formatExpenseObj(result.rows.item(0));
                    $scope.$watch('categories', function() {
                        for (var i = 0; i < $scope.categories.length; i++) {
                            if ($scope.categories[i].id == $scope.expense.category) {
                                $scope.expense.category = $scope.categories[i];
                            }
                        }
                    });
                }
            });
        }

        function doSaveExpense($event) {
            var expense = $scope.expense;
            if (angular.isDefined($scope.id) && $scope.id != null) {

                expenseService.update({
                    id: $scope.id,
                    //date object
                    date: expense.date,
                    memo: angular.isDefined(expense.memo) ? expense.memo : '',
                    category: (expense.category != '' && expense.category != null) ? expense.category.id : null,
                    //store in integer format
                    amount: expense.amount
                }).then(function(result) {});
            } else {
                expenseService.create({
                    //date object
                    date: expense.date,
                    memo: angular.isDefined(expense.memo) ? expense.memo : '',
                    category: (expense.category != '' && expense.category != null) ? expense.category.id : null,
                    //store in integer format
                    amount: expense.amount
                });
            }

        }

        function doDeleteExpense() {
        	expenseService.del($scope.id);
        	$scope.id = null;
        	$scope.expense = {};
        }

        function doCopyExpense() {
        	$scope.id = null;
        }

        $scope.doSaveExpense = doSaveExpense;
        $scope.doDeleteExpense = doDeleteExpense;
        $scope.doCopyExpense = doCopyExpense;
        <!-- datepicker -->
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
    }]);
