const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    
    var Hey = "";
    for (let i = 0;i < times; i++){
        Hey += word;
    }
    return Hey
};













// Do not edit below this line
module.exports = repeatString;
