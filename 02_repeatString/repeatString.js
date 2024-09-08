
let text = "";
let arrString = [];

const repeatString = function(String, Count) {
    if (Count < 0) {
        return "ERROR";
    } else {
    for (let i = 1; i <= Count; i++) { 
        text = text.concat(String);
}}
    return text;
};

// Do not edit below this line
module.exports = repeatString;
