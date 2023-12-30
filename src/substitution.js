const substitutionModule = (function () {
 function isUniqueAlphabet(alphabet) {
    const alphabetSet = new Set(alphabet);
    return alphabetSet.size === alphabet.length;
 }
  
  let correctAlphabet = "abcdefghijklmnopqrstuvwxyz"
  let cipher = [] 
  
  function substitution(input, alphabet, encode = true) {  
    let message = ""
    if (alphabet === undefined || alphabet.length !== 26){
      return false  
     }  
    
    if (!isUniqueAlphabet(alphabet)) {
        return false;
    }
 
  if (encode) { 
     for(let i=0; i < correctAlphabet.length; i++) {
      cipher[correctAlphabet[i]] = alphabet[i];  
    }
  } else {
      for(let i=0; i < correctAlphabet.length; i++) {
      cipher[alphabet[i]] = correctAlphabet[i]; 
    }     
 }
 
    for (let j = 0; j < input.length; j++) {
      let currentLetter = input[j].toLowerCase();
      
    if (correctAlphabet.includes(currentLetter)) {
        message += cipher[currentLetter];    
      
      } else if (currentLetter === " ") {
           message += currentLetter;
        } else {
            let specialIndex = alphabet.indexOf(currentLetter);
            if (specialIndex !== -1) {
                message += correctAlphabet[specialIndex];
            } else {
                message += currentLetter; 
        }
      }
    }
   return message 
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
