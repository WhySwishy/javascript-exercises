const convertToCelsius = function(F) {
  var Ctemp = (F - 32) * 5/9;
  if (Ctemp % 1 === 0 ){
    return Ctemp
  }
  else {C = Ctemp.toFixed(1);
  return parseFloat(C)}  

};


const convertToFahrenheit = function(C) {
  Ftemp = (C * 9/5) + 32;
  if ( Ftemp % 1 === 0){
    return Ftemp
  }
  else {
  F = Ftemp.toFixed(1);
  return parseFloat(F)}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
