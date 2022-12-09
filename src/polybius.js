// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //you can add any code you want within this function scope
let lookup = {
  "a": 11,  "b": 21,  "c": 31,  "d": 41,
  "e": 51,  "f": 12,  "g": 22,  "h": 32,
  "i": 42,  "j": 42,  "k": 52,  "l": 13,
  "m": 23,  "n": 33,  "o": 43,  "p": 53,
  "q": 14,  "r": 24,  "s": 34,  "t": 44,
  "u": 54,  "v": 15,  "w": 25,  "x": 35,
  "y": 45,  "z": 55
}
// const lookup = {
//   a: 11, b: 21, c: 31, d: 41, e: 51,
//   f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
//   l: 13, m: 23, n: 33, o: 43, p: 53, 
//   q: 14, r: 24, s: 34, t: 44, u: 54, 
//   v: 15, w: 25, x: 35, y: 45, z: 55,
// }
let reverseLookup = {
  "11": "a",  "21": "b",  "31": "c",  "41": "d",
  "51": "e",  "12": "f",  "22": "g",  "32": "h",
  "42": "(i/j)", "52": "k", "13": "l", "23": "m",
  "33": "n",  "43": "o",  "53": "p",  "14": "q",
  "24": "r",  "34": "s",  "44": "t",  "54": "u",
  "15": "v",  "25": "w",  "35": "x",   "45": "y",
  "55": "z"
}

function polybius(input, encode = true) {
  //DECODE
  if (!encode){
    if (input.replace(/\s/g, "").length % 2 !== 0) return false;
    let result = "";
    //loop through the input 
    for (let i=0; i<input.length; i+=2){
      if (input[i] === " ") {
        result += input[i] // maintains spaces
        i = i-1 // deletes extra space from adding 2
      } else { 
        const key =input[i]
        const value =input[i+1]
        // console.log("this is value", value)
        const letterPoint = `${key}${value}`
        result += reverseLookup[letterPoint]
      }
    }
    return result
  } else {
    let result = "";
    for (let i=0; i<input.length; i++) {
      if (input[i] === " ") {
        result += input[i] // maintains spaces
      } else { 
        const key =input[i].toLowerCase() // ignoring CAP letters
        // console.log("This is value key", key)
        // console.log(key)
        result += lookup[key]
      }
    }
    return result
  }
  
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


// if (typof (inputLowerCased[i]) !== "string "){
//   return false;
//  } result += inputLowerCased[i];
// } else{