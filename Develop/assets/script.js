// Possible Password Components
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "^", "`", "~", "%", "&", ":", ",", "$", "*", "+", "_", "-", "+", ".", "/", "<", ">", "?"];

// Necessary Variables
var confirmLength = "";
var confirmNumber;
var confirmAlphaLow;
var confirmAlphaUpp;
var confirmSpecial;

// Generation
function generatePassword() {
  var confirmLength = window.prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  while(confirmLength <=7 || confirmLength >= 129) {
    window.alert("Your desired character length cannot be utilized. Please choose a number between 8 and 128.");
    var confirmLength = window.prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  }
  window.alert("You have chosen " + confirmLength + " characters.")
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
