describe("pow", function () {
    // it("2 raises to 3 power is 8", function () {
    //     assert.equal(pow(2, 3), 8);
    // });
    // it("3 raises to 4 power is 81", function () {
    //     assert.equal(pow(3, 4), 81);
    // });

    describe("raises x to power 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 3; x++) {
            makeTest(x);
        }

        before(() => alert("Testing started   before all tests"));
        after(() => alert("Testing finished   after all tests"));

        beforeEach(() => alert("Before a test   enter a test"));
        afterEach(() => alert("After a test   exit a test"));
    });

    it("for negative n the result is NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });
});