const add = function (first, second) {
  let sum = first + second;
  return sum;
};

const subtract = function (first, second) {
  let dif = first - second;
  return dif;
};

const sum = function (arr) {
  let rez;
  if (arr.length === 0) {
    rez = 0;
  } else {
    rez = arr.reduce((sum, current) => sum + current, 0);
  }
  return parseInt(rez);
};

const multiply = function (arr) {
  let result = 1;
  arr.forEach(element => {
    result = result * element;
  });

return result;
};

const power = function (first, second) {
  return Math.pow(first, second);
};

const factorial = function (num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
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
