const reverseString = function(text) {

    // A variable to store new string
    let reversedStr = "";

    // text.length - 1 represents the last object present within the text var string
    // for loop starts at the last letter and iterates backwards.
    for(let i = text.length - 1; i >= 0; i--){
        
        
        reversedStr += text[i];   // <-- Same As -->  reversedStr = reversedStr + text[i]
    }

    return reversedStr;




    // Another Solution

    // splits the text at blankspaces, reverses the string and joins it back.
    // return text.split("").reverse().join("")

};

// Do not edit below this line
module.exports = reverseString;
