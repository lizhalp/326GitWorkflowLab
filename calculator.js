

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    // return the square root of the value
    return Math.sqrt(value);
}

// TODO: Implement square function
function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value
    return Math.pow(value, 2);
}

// reciporcal function
function calculateReciprocal(value) {
    // cannot divide by 0 
    if (value === 0) {
        throw new Error("0 does have a reciporcal.");
    }
    return 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
    // return the natural log of the value
}

// TODO: Implement sine function
function sine(value) {
    return Math.sin(value)
}

// TODO: Implement cosine function
function cosine(value) {
    return Math.cos(value)
}

// TODO: Implement tangent function
function tangent(value) {
    return Math.tan(value)
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal
};
