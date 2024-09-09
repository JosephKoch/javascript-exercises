

const reverseString = function(word) {
    let arrWord = word.split("").reverse();
    let text = arrWord.join("");
    return text;
    // for (let i = 0; i <= arrWord.length - 1; i++) {
    // }
};

// Do not edit below this line
module.exports = reverseString;
