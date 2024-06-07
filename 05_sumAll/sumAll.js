const sumAll = function(num1, num2) {

    let err_msg = "ERROR";

    if(typeof num1 === "string" || typeof num2 === "string"){ //Error if input parameters are strings
        return err_msg;
    }

    //Function is valid for positive integers
    else if(num1 > 0 && num2 > 0){
        // Stores generated values
        const valGenerated = [];


        if(num1 < num2){
            
            //incrementing for loop to generate the inbetween numbers between the parameters to sum
            for(let i = num1; i <= num2; i++){
                valGenerated.push(i);
            }

            // Sums the array values
            let sum = 0;
            for(let i = 0; i < valGenerated.length; i++){
                sum = sum + valGenerated[i];
            }
                
            return sum;
        }

        else{
            // Decrement loop to generate numbers inbetween if num1 is greater than num2
            for(let i = num1; i >= num2; i--){
                valGenerated.push(i);
            }

            // Sums the array values
            let sum = 0;
            for(let i = 0; i < valGenerated.length; i++){
                sum = sum + valGenerated[i];
            }
            
            return sum;
        }

    }

    //Return error message if input is not a positive integer
    else{
        return err_msg;
    }
};
// Do not edit below this line
module.exports = sumAll;
