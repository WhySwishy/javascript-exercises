const removeFromArray = function(array, ...removed) {


    let removedSet = new Set(removed); 
  
    array = array.filter(item => !removedSet.has(item))
  
   return array
  
  };
  
  removeFromArray([1,2,3,4,], 3, 2)


// Do not edit below this line
module.exports = removeFromArray;
