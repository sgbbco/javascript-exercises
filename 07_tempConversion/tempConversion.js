const convertToCelsius = function (fahrenheit) {
  let celsius = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

console.log(convertToCelsius(-10)) 

const convertToFahrenheit = function(celsius) {
  let fahrenheit = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
  return fahrenheit;
};

console.log(convertToFahrenheit(-10)) 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
