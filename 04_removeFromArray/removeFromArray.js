const removeFromArray = function(array) {
    let tempArray =  array;
    let args = Array.prototype.slice.call(arguments, 1);
    for(let item of args){
        let index = array.lastIndexOf(item);
        if (index != -1){
            tempArray.splice(index, 1);
        }
    }
    return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
