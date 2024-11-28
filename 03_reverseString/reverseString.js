const reverseString = function(str) {

    const ArrayStrings = str.split("");
     const reverseArray = ArrayStrings.reverse();
      const joinArray = reverseArray.join("");
  
      return joinArray
  };

reverseString ("Hello")


// Do not edit below this line
module.exports = reverseString;
