const add = function(num1, num2) {
  return num1 + num2;	
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(array) {
  return array.reduce(function(total, num) {
    return total + num;
  }, 0);
};


const multiply = function(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
};


const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num1) {
  if (num1 === 0) return 1;
  let product = 1;
  for (let i = num1; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
