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