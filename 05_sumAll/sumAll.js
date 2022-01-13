const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof (x) != "number" || typeof (y) != "number"){
        return "ERROR";
    }
    let sum = 0;
    let startValue = x < y ? x : y;
    let endValue = y > x ? y : x ;
    for (let i = startValue; i <= endValue; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
