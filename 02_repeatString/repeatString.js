const repeatString = function(string, numRepeats) {

    let returnString = '';
    if (numRepeats < 0){
        return "ERROR";
    }
    for (let i = 0; i < numRepeats; i++){
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
