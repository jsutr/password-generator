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
  //Length prompt
  var confirmLength = window.prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  while(confirmLength <=7 || confirmLength >= 129) {
    window.alert("Your desired character length cannot be utilized. Please choose a number between 8 and 128.");
    var confirmLength = window.prompt("How many characters would you like in your password? Please choose a number between 8 and 128.");
  }
  //Notify user of confirmLength choice
  window.alert("You have chosen " + confirmLength + " characters.");

  //Component Choices
  var confirmNumber = window.confirm("Would you like numbers in your password? Click OK if yes.");
  var confirmAlphaLow = window.confirm("Would you like lowercase letters in your password? Click OK if yes.");
  var confirmAlphaUpp = window.confirm("Would you like uppercase letters in your password? Click OK if yes.");
  var confirmSpecial = window.confirm("Would you like special characters in your password? Click OK if yes.");
  while (confirmNumber === false && confirmAlphaLow === false && confirmAlphaUpp === false && confirmSpecial === false) {
      window.alert("Please click OK for at least one parameter.");
      var confirmNumber = window.confirm("Would you like numbers in your password? Click OK if yes.");
      var confirmAlphaLow = window.confirm("Would you like lowercase letters in your password? Click OK if yes.");
      var confirmAlphaUpp = window.confirm("Would you like uppercase letters in your password? Click OK if yes.");
      var confirmSpecial = window.confirm("Would you like special characters in your password? Click OK if yes.");
    }
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
