const convertToCelsius = function(f_val) {

  // Formula to convert to Celsius from Fahrenheit
  let convertedVal = ((f_val) - 32) * (5/9);

  const roundedVal = Math.round(convertedVal * 10)/10; // rounding to one decimal place

  return roundedVal;
  
  
};

const convertToFahrenheit = function(c_val) {
  
  // Formula to convert to Fahrenheit from Celsius
  convertedVal = (c_val * (9/5)) + 32;

  const roundedVal = Math.round(convertedVal * 10)/10; // rounding to one decimal place

  return roundedVal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
