const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let total = 0;
  for (let item of numbers){
   
    total += item;
  }
  return Number(total);
};

const multiply = function(numbers) {
  let total = 1;
  for (let item of numbers){
    total = total * item;
  }
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  let total = 1;
  if (n == 0){
    return 1;
  } else {
    for (let i = n; i > 0; i--){
      total = total * i;
    }
  }
	return total;
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
