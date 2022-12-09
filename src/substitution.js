// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let lookup = "abcdefghijklmnopqrstuvwxyz";
  // lookup = a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
  // index# = 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

  function substitution(input, alphabet, encode = true) {
    const inputLC = input.toLowerCase()
    // const newInputLC = inputLC.replace(/\s/g, " ");  
    //return early
    for (i=0; i<input.length; i++) {
      if(!alphabet || alphabet.length !== 26 || alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])){
        return false;
      }
    }
    let result = "";
      //loop through the input one by one 
      for (i=0; i<input.length; i++) {
      //check to see if char is in lookup
      if (lookup.includes(inputLC[i])){
        let foundLetterIndex = lookup.indexOf(inputLC[i]) // <-- returns index#
        //take the index# and find the alphabet char at that same index#
        let newLetter = alphabet.charAt(foundLetterIndex)
        result = result.concat(newLetter)
        // console.log("this is result", result)
      } else {
        result += input[i]
      }
    }
    
    //DECODE
    if (!encode) {
      let result = "";
      for (let i=0; i<input.length; i++) {
        if (alphabet.includes(inputLC[i])) {
          let decodedIndex = alphabet.indexOf(inputLC[i])
          // console.log("this is index", decodedIndex)
          let newDecodedLetter = lookup.charAt(decodedIndex)
          // console.log("this is letter", newDecodedLetter)
          result = result.concat(newDecodedLetter)
          // console.log("this is result", result)
          // console.log("look here", result)
        } else {
          result += input[i]
          // console.log("space", result)
        }
      }
      return result
    }
    return result
      
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
// let maintainSpace = input.replace(/\s/g, " ")
