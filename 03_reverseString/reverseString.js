

const reverseString = function(word) {
    let arrWord = word.split("").reverse();
    let text = arrWord.join("");
    return text;
};

// Do not edit below this line
module.exports = reverseString;
