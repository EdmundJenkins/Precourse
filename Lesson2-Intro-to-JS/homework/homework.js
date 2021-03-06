
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Today is Taco Tuesday' ;

//create a number variable, it an be any number
let newNum = 365 ;

//create a boolean variable
let newBool = false ;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
   return str;
}

function add(x, y) {
  let sum = x + y;
  return sum;
}

function subtract(x, y) {
  let difference = x - y;
  return difference;
}

function multiply(x, y) {
  let product = x * y;
  return product;
}

function divide(x, y) {
  let quotient = x / y;
  return quotient;
}

function areEqual(x, y) {
  if (x === y) {return true;
  } else {return false;}
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {return true;
  } else {return false;}
}

function lessThanNinety(num) {
  if (num < 90) {return true;
  } else {return false;}
}

function greaterThanFifty(num) {
  if (num > 50) {return true;
  } else {return false;}
}

function getRemainder(x, y) {
  let remainder = x % y;
  return remainder;
}

function isEven(num) {
  if (num % 2 === 0) {return true;
  } else {return false;}
}

function isOdd(num) {
  if (num % 2 != 0) {return true;
  } else {return false;}
}

function square(num) {
  let numSquared = Math.pow (num, 2);
  return numSquared;
}

function cube(num) {
  let numCubed = Math.pow (num, 3);
  return numCubed;
}

function raiseToPower(num, exponent) {
  let numToPower = Math.pow (num, exponent);
  {return numToPower;}
}

function roundNumber(num) {
  let numRounded = Math.round(num);
  return numRounded;
}

function roundUp(num) {
  let numRoundedUp = Math.ceil(num);
  return numRoundedUp;
}

function addExclamationPoint(str) {
  let newstr = '!';
  {return str + newstr;}
}

function combineNames(firstName, lastName) {
  {return firstName + ' ' + lastName;}
}

function getGreeting(name) {
  let grt = 'Hello ';
  {return grt + name + '!';}
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  {return length * width;}
}

function getTriangleArea(base, height) {
  {return base * height * 0.5;}
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString: newString,
  newNum: newNum,
  newBool: newBool,
  newSubtract: newSubtract,
  newMultiply: newMultiply,
  newModulo: newModulo,
  returnString: returnString,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea
};
