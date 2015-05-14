'use strict';

describe('Service: NumberChecker', function() {

    // load the service's module
    beforeEach(module('lottoApp'));

    // instantiate service
    var NumberChecker;
    beforeEach(inject(function(_NumberChecker_) {
        NumberChecker = _NumberChecker_;
    }));

    it('[1,2,3,4,5,6], [1,2,3,4,5,6] should be Equal', function() {
        var inst1 = new NumberChecker([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
        expect(inst1.getMatching()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('[1,3,5,2,4,6], [1,2,3,4,5,6] should be Equal', function() {
        var inst2 = new NumberChecker([1, 3, 5, 2, 4, 6], [1, 2, 3, 4, 5, 6]);
        expect(inst2.getMatching()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('[1,3,5,2,4,6], [1,2,3,4,5,6] should be Equal', function() {
        var inst2 = new NumberChecker([1, 3, 5, 2, 4, 6], [1, 2, 3, 4, 5, 6]);
        expect(inst2.getMatching()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('[1,2,3,4,5,6], [1,2,3,4,5,6] should be Equal', function() {
        var inst1 = new NumberChecker([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
        expect(inst1.getMatching()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('[1,2,3,4,5,6], [1,2,3,4,5,6] should be Equal', function() {
        var inst3 = new NumberChecker([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
        expect(inst3.getMatching()).toEqual([1, 2, 3, 4, 5, 6]);
        var inst4 = new NumberChecker([1, 3, 5, 2, 4, 6], [1, 2, 3, 4, 5, 6]);
        expect(inst4.getMatching()).toEqual([1, 2, 3, 4, 5, 6]);

    });

});
