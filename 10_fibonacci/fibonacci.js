const fibonacci = function(num) {
  let a = 0;
  let b = 1;
  let temp;
  
  if (num <= 0) {
    return 'OOPS';
  }

  for (let i = 2; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// test
console.log(fibonacci(7));

// Do not edit below this line
module.exports = fibonacci;