// TODO: Fix the square root function not displaying
feature/add-natural-log-function
function calculateSquareRoot(value) { //Elizabeth
  // return the square root of the value

function calculateSquareRoot(value) {
    // return the square root of the value
    return Math.sqrt(value);
main
}

// TODO: Implement square function
feature/add-natural-log-function
function calculateSquare(value) { // Megan
  // Hint: Use exponentiation
  // return the square root of the value

function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value
    return Math.pow(value, 2);
main
}

feature/add-natural-log-function
// TODO: FIX reciprocal function
function calculateReciprocal() { // Timothy
  // Hint: Reciprocal is 1/x
  // return the square root of the value
  return 1 * value;

// reciporcal function
function calculateReciprocal(value) {
    // cannot divide by 0 
    if (value === 0) {
        throw new Error("0 does have a reciporcal.");
    }
    return 1 / value;
main
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
feature/add-natural-log-function
  // return the sine of the value
    return Math.sin(value)
main
}

// TODO: Implement cosine function
function cosine(value) {
feature/add-natural-log-function
  // return the cosine of the value

 feature/add-tangent-function
// TODO: Implement tangent function
function tangent(value) {
    // return the tangent of the value
    return Math.tan(value)
=======
    return Math.cos(value)
main
 main
}

// TODO: Implement tangent function // Tuoshieng
function tangent(value) {
feature/add-natural-log-function
  // return the tangent of the value

    return Math.tan(value)
main
}

module.exports = {
  calculateSquareRoot,
  calculateSquare,
  calculateReciprocal,
};
