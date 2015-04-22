'use strict';

/**
 * @ngdoc service
 * @name checklistApp.CheckListItem
 * @description
 * # CheckListItem
 * Factory in the checklistApp.
 */
angular.module('checklistApp')
    .factory('CheckListItem', ['const_db', '$webSql', function(const_db, $webSql) {
        // Service logic
        // ...
        var statuses = [
            'done',
            'notdone'
        ];
        var checklistItem = {
            "id": {
                "type": "INTEGER",
                "null": "NOT NULL", // default is "NULL" (if not defined)
                "primary": true, // primary
                "auto_increment": true // auto increment
            },
            "id_checklist": {
                "type": "INTEGER",
                "null": "NOT NULL" // default is "NULL" (if not defined)
            },
            "created": {
                "type": "TIMESTAMP",
                "null": "NOT NULL",
                "default": "CURRENT_TIMESTAMP" // default value
            },
            "label": {
                "type": "TEXT",
                "null": "NOT NULL"
            },
            "status": {
                "type": "TEXT",
                "null": "NOT NULL"
            }
        };

        var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
        // Public API here
        return {
            save: function(label, status, id_checklist, id) {
                if (statuses.indexOf(status) == -1) {
                    status = statuses[0];
                }
                if (angular.isDefined(id_checklist)) {
                    if (angular.isDefined(id) && id != null) {
                        return db.update('checklist_item', {
                            "label": label,
                            "status": status,
                            "id_checklist": id_checklist
                        }, {
                            "id": id
                        });
                    } else {
                        return db.insert('checklist_item', {
                            //convert to integer first
                            "label": label,
                            "status": status,
                            "id_checklist": id_checklist
                        });
                    }
                }
            },
            getFromList: function(id_checklist) {
                if (angular.isDefined(id_checklist) && id_checklist != null) {
                    return db.select('checklist_item', {
                        'id_checklist': id_checklist
                    });
                }
            },
            get: function(id) {
                if (angular.isDefined(id)) {
                    return db.select('checklist_item', {
                        'id': id
                    });
                }
            },
            remove: function(id) {
                if (angular.isDefined(id) && id != null && id != '') {
                    return db.del('checklist_item', {
                        "id": id
                    });
                }
            }
        };
    }]);
