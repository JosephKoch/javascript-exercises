const removeFromArray = function(myArray) {
    let arr = myArray;
    for (let i = 1; i < arguments.length; i++) {
    arr = arr.filter(e => e !== arguments[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
