const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when rounding 1.4 and 4.5 and summing them', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      expect(result).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when rounding 1.4 and 4.5 and subtracting them', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      expect(result).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when rounding 1.4 and 4.5 and dividing them', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(result).to.equal(0.2);
    });

    it('should return "Error" when trying to divide by 0', () => {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      expect(result).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
