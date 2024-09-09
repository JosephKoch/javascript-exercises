const sumAll = function(x, y) {
    if (x < 0 || y < 0 
        || !Number.isInteger(x, y) 
        || typeof y != 'number') {
        return "ERROR";
    } else {
        arr = [x, y];
        const low = Math.min(...arr);
        const high = Math.max(...arr);
        let sum = 0;
        for (let i = low; i <= high; i++) {
        sum += i;}; return sum;
    };
};

//create function low and high argument
//increment from low to high number.
//add each increment to total sum
//return sum


// Do not edit below this line
module.exports = sumAll;
