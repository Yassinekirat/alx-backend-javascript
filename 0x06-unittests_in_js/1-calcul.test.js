// 1-calcul.test.js
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
  describe("SUM", function() {
    it("should return 3 when inputs are 1 and 2", function() {
      const res = calculateNumber('SUM', 1, 2);
      assert.strictEqual(res, 3);
    });
    it("should return 5 when inputs are 1.6 and 3.2", function() {
      const res = calculateNumber('SUM', 1.6, 3.2);
      assert.strictEqual(res, 5);
    });
  });

  describe("SUBTRACT", function() {
    it("should return -1 when inputs are 1 and 2", function() {
      const res = calculateNumber('SUBTRACT', 1, 2);
      assert.strictEqual(res, -1);
    });
    it("should return 2 when inputs are 3.7 and 1.2", function() {
      const res = calculateNumber('SUBTRACT', 3.7, 1.2);
      assert.strictEqual(res, 2);
    });
  });

  describe("DIVIDE", function() {
    it("should return 2 when inputs are 4 and 2", function() {
      const res = calculateNumber('DIVIDE', 4, 2);
      assert.strictEqual(res, 2);
    });
    it("should return 'Error' when division by 0", function() {
      const res = calculateNumber('DIVIDE', 4, 0.1);
      assert.strictEqual(res, 'Error');
    });
    it("should return 1 when inputs are 1.4 and 1.4", function() {
      const res = calculateNumber('DIVIDE', 1.4, 1.4);
      assert.strictEqual(res, 1);
    });
  });
});
