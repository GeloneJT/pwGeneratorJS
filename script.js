// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaBetLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(alphaBetLow);
console.log(alphaBetLow.length);
var alphaBetUP = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(alphaBetUP);
console.log(alphaBetUP.length);
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numeric);
console.log(numeric.length);
var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "?",
  "<",
  ">",
  "?",
  "{",
  "}",
  "[",
  "]",
];
console.log(symbols);
console.log(symbols.length);
var alphaNumericSymb = alphaBetLow + alphaBetUP + numeric + symbols;
console.log(alphaNumericSymb);
console.log(alphaNumericSymb.length);


function writePassword() {

  var passLength = parseInt(
    prompt("Choose a password length between 8 and 128 characters")
   );

  if (isNaN(passLength) === true) {
    alert("Password length must be provided as a number")
    return;
   }

  if (passLength < 8) {
    alert("Password length must be at least 8 chars");
    return;
    
  };

  var plzword = "";

  var alphaUp = confirm("Would you like uppercase characters")
  console.log(alphaUp);
  if (alphaUp){
    plzword = plzword + alphaBetUP;
    console.log(plzword);
  }
  else plzword = plzword;
  console.log(plzword);


  var alphalow = confirm("Would you like lowercase characters")
  console.log(alphalow);
  if (alphalow){
    plzword = plzword + alphaBetLow;
    console.log(plzword);
  }
  else plzword = plzword;
  console.log(plzword);


  var symbolchar = confirm("Would you like symbols characters")
  console.log(symbolchar);
  if (symbolchar){
    plzword = plzword + symbols;
    console.log(plzword);
  }
  else plzword = plzword;


  var numeral = confirm("Would you like numbers")
  console.log(numeral);
  if (numeral){
    plzword = plzword + numeric;
    console.log(plzword);
  }
  else plzword = plzword;
  
}

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Write password to the #password input
// function writePassword(){
//   var length = "";
//   charset = alphaNumericSymb
//   retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i){
//     retVal += charset.charAt(Math.floor(Math.random() *n));
//   }
// }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
