'use strict';

describe('Service: LottoNumber', function () {

  // load the service's module
  beforeEach(module('miscApp'));

  // instantiate service
  var LottoNumber;
  beforeEach(inject(function (_LottoNumber_) {
    LottoNumber = _LottoNumber_;
  }));

  it('should do something', function () {
    expect(!!LottoNumber).toBe(true);
  });

});
