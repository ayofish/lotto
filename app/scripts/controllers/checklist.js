'use strict';

/**
 * @ngdoc function
 * @name checklistApp.controller:ChecklistCtrl
 * @description
 * # ChecklistCtrl
 * Controller of the checklistApp
 */
angular.module('checklistApp')
    .controller('ChecklistCtrl', ['$scope', '$routeParams', 'CheckListItem', function($scope, $routeParams, CheckListItem) {
        // (label, status, id_checklist, id)
        $scope.checklistItems = [];

        function getList(listId) {
            CheckListItem.getFromList(listId).then(function(result) {
                var checklistItems = [];
                if (result.rows.length > 0) {
                    for (var i = 0; i < result.rows.length; i++) {
                        var resRow = result.rows.item(i);
                        var checklistItem = angular.extend({
                            edit: false,
                            done: resRow.status == 'done' ? true : false
                        }, resRow);
                        checklistItems.push(checklistItem);
                        //get the item count per checklist
                    }
                }
                $scope.checklistItems = checklistItems;
            });
        }


        var addItem = function() {
            var itemId = $scope.itemid;
            var itemlabel = $scope.itemlabel;
            CheckListItem.save(itemlabel, null, $routeParams.id, itemId).then(function(result) {
                CheckListItem.get(result.insertId).then(function(result) {
                    if (result.rows.length > 0) {
                        $scope.checklistItems.push(result.rows.item(0));
                    }
                });
            });
            $scope.itemlabel = null;
            $scope.itemid = null;
        };

        var itemSelected = function(checklistItem) {
            checklistItem.edit = true;
        };

        var removeItem = function(checklistItem) {
            CheckListItem.remove(checklistItem.id).then(function() {
                getList($routeParams.id);
            });
        };


        var isDone = function(checklistItem) {
            if (checklistItem.done == true) {
                return 'item-done';
            }else{
            	return '';
            }
        };
        $scope.isDone = isDone;
        $scope.itemSelected = itemSelected;
        $scope.addItem = addItem;
        getList($routeParams.id);
    }]);
