'use strict';

describe('Controller: MynumbersCtrl', function () {

  // load the controller's module
  beforeEach(module('lottoApp'));

  var MynumbersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MynumbersCtrl = $controller('MynumbersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
