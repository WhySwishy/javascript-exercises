const leapYears = function(year) {
    var remainder; remainder = year % 4; 
    var remainder2 = year % 100; 
    var remainder3 = year % 400;
    
    if (remainder !== 0 )
    {return false}
      else if (remainder2 === 0 && remainder3 !== 0)
         {return false}
          else {
            return true
               }
  
  };
// Do not edit below this line
module.exports = leapYears;
