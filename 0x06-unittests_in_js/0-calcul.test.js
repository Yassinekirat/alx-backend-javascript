const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {
    it("should return 3 when inputs are 1 and 2", function() {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3);
    });
    
    it("should round and return 3 when inputs are 1.4 and 2.2", function() {
        const res = calculateNumber(1.4, 2.2);
        assert.strictEqual(res, 3);
    });
    
    it("should round and return 5 when inputs are 1.6 and 2.7", function() {
        const res = calculateNumber(1.6, 2.7);
        assert.strictEqual(res, 5);
    });

    it("should return 0 when inputs are 0 and 0", function() {
        const res = calculateNumber(0, 0);
        assert.strictEqual(res, 0);
    });

    it("should round negative numbers and return -4 when inputs are -1.6 and -1.7", function() {
        const res = calculateNumber(-1.6, -1.7);
        assert.strictEqual(res, -4);
    });

    it("should round and return -2 when inputs are -1.4 and -1.3", function() {
        const res = calculateNumber(-1.4, -1.3);
        assert.strictEqual(res, -2);
    });
});
