// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let lookup = "abcdefghijklmnopqrstuvwxyz";
  // lookup = a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
  // index# = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
  function caesar(input, shift, encode = true) {
    //1. return false for incorrect info
    if (!shift || shift === 0 || shift <-25 || shift > 25) {
      return false;
    }
    //DECODE: is opposite value of the shift# (positive --> negative & vice versa)
    if (encode === false) {
      shift = 0 - shift; 
    }
    
    //ENCODE
    let result = "";
    for (let i = 0; i<input.length; i++) {
      //ensure input is all lowercase
      const inputLowerCased = input.toLowerCase();
      //find the index of the current character
      if (lookup.includes(inputLowerCased[i])){
        let foundIndex = lookup.indexOf(inputLowerCased[i])
      //add shift to the that index#
        let  newIndex = foundIndex += shift
      //handles end of alphabet
         if (newIndex > 25) {
          loopedIndex = lookup.indexOf(inputLowerCased[i]) +shift; 
          newIndex = loopedIndex - 26;
         }
         if (newIndex < 0) {
           loopedIndex = lookup.indexOf(inputLowerCased[i]) +shift; 
           newIndex =  loopedIndex +26
         }
        let newFoundChar = lookup.charAt(newIndex)
        // console.log(newFoundChar)
      // add new newFoundChar to the result
          result = result.concat(newFoundChar)
      // Leaves spaces & other symbols
      } else {
        result += input[i]
      }
      }
    
      // console.log("result", result)
      return result;


  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


// if (foundIndex > 25) {
//   let loopedIndex = foundIndex -26
// }