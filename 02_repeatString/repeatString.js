const repeatString = function(text, num) {
    
    if(num < 0) return "ERROR";
    let string = "";
    for(let i = 0; i < num; i++){
        string = string + text;
    }

    return string;

};

// Do not edit below this line
module.exports = repeatString;
