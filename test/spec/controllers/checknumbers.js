'use strict';

describe('Controller: ChecknumbersCtrl', function () {

  // load the controller's module
  beforeEach(module('lottoApp'));

  var ChecknumbersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChecknumbersCtrl = $controller('ChecknumbersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChecknumbersCtrl.awesomeThings.length).toBe(3);
  });
});
