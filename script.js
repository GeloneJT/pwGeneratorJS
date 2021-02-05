// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaBetLow =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(alphaBetLow);
console.log(alphaBetLow.length);
var alphaBetUP = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
console.log(alphaBetUP);
console.log(alphaBetUP.length);
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
console.log(numeric);
console.log(numeric.length);
var symbols = ['!','@','#','$','%','^','&','*','(',')','_','+','?','<','>','?','{','}','[',']']
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

