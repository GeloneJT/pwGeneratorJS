// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaBetLow ="abcdefghijklmnopqrstuvwxyz";
console.log(alphaBetLow);
console.log(alphaBetLow.length);
var alphaBetUP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(alphaBetUP);
console.log(alphaBetUP.length);
var numeric = "0123456789";
console.log(numeric);
console.log(numeric.length);
var symbols = "!@#$%^&*()_+?<>?{}[]"
console.log(symbols);
console.log(symbols.length);
var alphaNumericSymb = alphaBetLow + alphaBetUP + numeric + symbols;
console.log(alphaNumericSymb);
console.log(alphaNumericSymb.length);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword

);

