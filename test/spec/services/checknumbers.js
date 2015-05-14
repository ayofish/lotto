'use strict';

describe('Service: CheckNumbers', function () {

  // load the service's module
  beforeEach(module('lottoApp'));

  // instantiate service
  var CheckNumbers;
  beforeEach(inject(function (_CheckNumbers_) {
    CheckNumbers = _CheckNumbers_;
  }));

  it('should do something', function () {
    expect(!!CheckNumbers).toBe(true);
  });

});
