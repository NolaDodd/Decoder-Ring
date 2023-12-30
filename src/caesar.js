const caesarModule = (function () {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  function caesar(input, shift, encode = true) {    
    let message = ""   
    
    if(shift === undefined || shift === 0 || shift > 25 || shift < -25){
      return false
    }
     if (encode === false)
    {
      shift = shift * -1;
    } 
    
  for (let i = 0; i < input.length; i++){
    let character = input[i].toLowerCase()
    let alphabetIndex = alphabet.indexOf(character) 
        if (alphabetIndex === -1){
         message += character
          
       } else {  
        if (shift + alphabetIndex >= alphabet.length ){
        let wrap = (shift + alphabetIndex) - 26
       message += alphabet[wrap]
          
       } else if (shift + alphabetIndex < 0 ) {  
        let wrap = (shift + alphabetIndex) + 26
        message += alphabet[wrap]
         
       } else {
    message += alphabet[alphabetIndex + shift]
     }
    }
   }
  return message   
   }
  
  return {
    caesar,
  };
})();

module.exports = {caesar: caesarModule.caesar};
