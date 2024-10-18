const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


// Add your tests here
describe('calculateReciprocal', function() {
    it('should return 0.5 for input 2', function() {
        const res = calculator.calculateReciprocal(2);
        assert.strictEqual(res, 0.5);
    });
});