const reverseString = function(str) {
reverseStr = '';

for(let i=str.length; i > 0; i--){
    reverseStr += str[i-1];
}
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
