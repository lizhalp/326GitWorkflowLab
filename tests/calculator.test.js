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

    it('naturalLog should return ~1.386 for input 4', function() {
        const res = calculator.naturalLog(4);
        assert.strictEqual(res.toFixed(3), '1.386');
    });
});


// Add your tests here

describe('Calculator square function', function() {
    const result1 = calculator.calculateSquare(5);
    const result2 = calculator.calculateSquare(7);
    it('should return 25', function(){
        assert.strictEqual(result1, 25);
    });
    it('should return 49', function(){
        assert.strictEqual(result2, 49);
    });
});

describe('calculateReciprocal', function() {
    it('should return 0.5 for input 2', function() {
        const res = calculator.calculateReciprocal(2);
        assert.strictEqual(res, 0.5);
    });
});

