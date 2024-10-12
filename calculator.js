// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) { //Elizabeth
  // return the square root of the value
}

// TODO: Implement square function
function calculateSquare(value) { // Megan
  // Hint: Use exponentiation
  // return the square root of the value
}

// TODO: FIX reciprocal function
function calculateReciprocal() { // Timothy
  // Hint: Reciprocal is 1/x
  // return the square root of the value
  return 1 * value;
}

// TODO: Implement natural log function
function naturalLog(value) { // Kyle
  if (value <= 0) return NaN;
  let result = 0;
  let term = (value - 1) / (value + 1);
  let termSquared = term * term;
  let numerator = term;

  for (let i = 1; i < 1000; i += 2) {
    result += numerator / i;
    numerator *= termSquared;
  }

  return 2 * result;
}

// TODO: Implement sine function // Alan
function sine(value) {
  // return the sine of the value
}

// TODO: Implement cosine function
function cosine(value) {
  // return the cosine of the value
}

// TODO: Implement tangent function // Tuoshieng
function tangent(value) {
  // return the tangent of the value
}

module.exports = {
  calculateSquareRoot,
  calculateSquare,
  calculateReciprocal,
};
