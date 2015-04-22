'use strict';

/**
 * @ngdoc service
 * @name checklistApp.CheckList
 * @description
 * # CheckList
 * Factory in the checklistApp.
 */
angular.module('checklistApp')
    .factory('CheckList', ['const_db', '$webSql', function(const_db, $webSql) {
        // Service logic
        // ...

        var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
        // Public API here
        return {
            save: function(name, id) {
                if (angular.isDefined(id)) {
                    return db.update('checklist', {
                        "name": name
                    }, {
                        "id": id
                    });
                } else {
                    return db.insert('checklist', {
                        //convert to integer first
                        "name": name
                    });
                }

            },
            get: function(id) {
                if (angular.isDefined(id)) {
                    return db.select('checklist', {
                        'id': id
                    });
                } else {
                    return db.selectAll('checklist');
                }

            }
        };
    }]);
