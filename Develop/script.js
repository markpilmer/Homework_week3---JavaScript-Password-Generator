// Assignment Code
var generateBtn = document.querySelector("#generate");



// PseudoCode
// 1. Prompt user for number bewteen 8 -128
    // validate input
// 2. confirm user for lowercase
// 3. confirm user for uppercase
// 4. confirm user for numeric
// 5. confirm user for special characters

// 6. disply the crieria that was chosen
    // confirm criteria is correct

// 7. if user confirms criteria correct generate password
// 8. If user clicks cancel prompt for criteria again

// Write password to the #password input
function writePassword() {





  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordTextbox.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
