const leapYears = function(year) {

// year is divisible by 100 but not by 400 (isNotLeapYear)
if(year % 100 === 0 && year % 400 !== 0){
    return false;
}

// year is divisible by 100 and 400 (isLeapYear)
else if(year % 100 === 0 && year % 400 === 0){
    return true;
}

// year is divisible by 4 (isLeapYear)
else if(year % 4 === 0 ){
    return true;
}

else{
    return false;
}


};

// Do not edit below this line
module.exports = leapYears;
