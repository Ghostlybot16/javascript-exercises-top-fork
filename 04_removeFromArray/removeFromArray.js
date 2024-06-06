const removeFromArray = function(array, ...num) {

    // Sorting Arrays
    sorted_array = array.toSorted(); //first array
    sorted_num = num.toSorted(); // array containing elements that need to be discarded

    const nonCommonElements = [];

    // Iterate through sorted_array  
    for(let i = 0; i < sorted_array.length; i++){

        // Add the element to nonCommonElements if the sorted_array values are not in sorted_num array
        if(!sorted_num.includes(sorted_array[i])){
            nonCommonElements.push(sorted_array[i])
        }
    }
    
    return nonCommonElements;

};

// Do not edit below this line
module.exports = removeFromArray;
