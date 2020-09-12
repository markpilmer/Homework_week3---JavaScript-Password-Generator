
var generateBtn = document.querySelector("#generate");

// function query for pasword length
function askPasswordlength() {
  length = prompt("Enter the the length of the password:  (must be 8 - 128 characters)");
  if (length > 7 && length < 129) {
    //length vaildated 
    return parseInt(length);
  } else {
    //length invaid
    return askPasswordlength()
  }
}

// function to confirm characters to be used for password
function generatePasswordCriteria() {
  uppercase = confirm("Do you want to use lowercase letters")
  lowercase = confirm("Do you want to use capital letters?");
  numbers = confirm("Do you want to use numbers?");
  specialChar = confirm("Do you want to use special characters?");
}

// function for creation of password 
function createPassword() {

  askPasswordlength()
  generatePasswordCriteria()

  // arrays for for password generation
  var capLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  randomPassword = "";
  let characterArray = []

  //concatenating of arrays required for password
  if (uppercase)
    characterArray = characterArray.concat(capLettersArray)
  if (lowercase)
    characterArray = characterArray.concat(lowLettersArray)
  if (numbers)
    characterArray = characterArray.concat(numberArray)
  if (specialChar)
    characterArray = characterArray.concat(specCharArray)

  for (i = 0; i <= length; i++) {
    randomPassword += characterArray[Math.floor(Math.random() * characterArray.length)]
    console.log(randomPassword)

    document.getElementById("password").innerHTML = randomPassword;
  }
  return randomPassword
}

generateBtn.addEventListener("click", createPassword);









