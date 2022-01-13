const ftoc = function(num) {
  let celsius = (num - 32) * 5/9;
  return Number(celsius.toFixed(1));
};

const ctof = function(num) {
  let f = num * (9/5) + 32;
  return Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
