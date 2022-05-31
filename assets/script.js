// Assignment code here
const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: '!;,.%/(){}#+-:_"@|`$=*^[]?&~'
};
  function generatePassword(){
      //initial ask for number
    var pw =(window.prompt("Pick a number between 8-128"));
    // check under 8 and over 128
    if (pw <8){
        var pw = window.prompt("Pick a number between 8-128");
    } else if (pw >128) {
        var pw = window.prompt("Pick a number between 8-128");        
    }else {
        window.alert("Thank You")
    }
    //uppercase
    if (confirm("Would you like Upper Case?")) {
       var upperCase = characters.uppercase;
      } else {
       var upperCase = "";
      }
      // Lower case 
if (confirm("Would you like lower Case?")) {
    var lowerCase = characters.lowercase;
   } else {
    var lowerCase = "";
   }
// Numbers 
if (confirm("Would you like Numbers?")) {
    var number = characters.numbers;
   } else {
    var number = "";
   }
   //pw variable
   var setpw = number + lowerCase + upperCase;
  console.log(setpw);
 //for loop 
 var realPw = "";
 for (let i = 0; i < parseInt(pw); i++) {
  realPw += setpw[Math.floor(Math.random() * setpw.length)];
}
console.log(realPw);
return(realPw);
}
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);