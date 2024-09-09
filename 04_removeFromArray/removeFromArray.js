const removeFromArray = function(myArray, x) {
    let arr = myArray;
    arr = arr.filter(e => e !== x);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
