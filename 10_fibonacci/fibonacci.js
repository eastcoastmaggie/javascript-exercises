const fibonacci = function(pos) {
    if (Number(pos) < 0){
        return "OOPS"
    }
let currentValue = 1;
let previousValue = 0;
for (let i= 1; i < Number(pos); i++){
   let tempValue = currentValue;
   currentValue = currentValue + previousValue;
   previousValue = tempValue;
}

return currentValue;

};

// Do not edit below this line
module.exports = fibonacci;
