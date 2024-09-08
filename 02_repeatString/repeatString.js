
let text = "";
let arrString = [];

const repeatString = function(String, Count) {
    for (let i = 1; i <= Count; i++) { 
        text = text.concat(String);
}
    return text;
};

// Do not edit below this line
module.exports = repeatString;
