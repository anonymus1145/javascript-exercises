const convertToCelsius = function(intFahrenheit) {
  return Math.round((intFahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(intCelsius) {
  return Math.round((((intCelsius * 9) / 5) + 32)* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};