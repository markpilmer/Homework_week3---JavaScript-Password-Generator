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

askPasswordlength()

function askPasswordlength() {
  var length = prompt("Enter the the length of the password:  (must be 8 - 128 characters)");
  if (length > 7 && length < 129) {
    //length vaildated 
    return parseInt(length);
  } else {
    //length invaid
    return askPasswordlength()
    
  }
}


generatePasswordCriteria()
// passsword citeria questions
function generatePasswordCriteria() {

  uppercase = confirm("Do you want to use lowercase letters")
  lowercase = confirm("Do you want to use capital letters?");
  numbers = confirm("Do you want to use numbers?");
  specialChar = confirm("Do you want to use special characters?");
  writePassword()
}


// arrays for generating the password


function writePassword() {
var capLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
  
  randomPassword = "";
  characterArray = []

  if (uppercase)
    characterArray = characterArray.concat(capLettersArray)

  if (lowercase)
    characterArray = characterArray.concat(lowLettersArray)

  if (numbers)
    characterArray = characterArray.concat(numberArray)

  if (specialChar)
    characterArray = characterArray.concat(specCharArray)
  }


function generatePassword() {
  
// var password = generatePassword();
for (i = 0; i <= length; i++) {
  randomPassword += characterArray[Math.floor(math.random() * characterArray.length)]
console.log(ran)
}
}



  // var passwordText = document.querySelector("#password");

  // passwordTextbox.value = password;

// 



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
