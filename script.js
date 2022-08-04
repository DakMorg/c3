// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var question = "(Type y or n)   Would you like your password to have: "
  var passwordCriteria = ["Uppercase", "Lowercase", "Numbers", "Special Characters"];
  var lowerCase = "abcdefghiijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIIJKLMNOPQRSTUVWXYZ";
  var numbers = "123456789";
  var specialCharacters = "!@#$%^&*";
  var selectedCriteria = [];
  var criteriaAnswer = "";
  var passwordLength = 0;
  var charset = "";
  var randomPassword = "";

  // y/n window prompts
  for (let i = 0; i < passwordCriteria.length; i++) {
    criteriaAnswer = window.prompt(question + passwordCriteria[i], "");
    if (criteriaAnswer.toLowerCase() == "y") {
      selectedCriteria.push(passwordCriteria[i]);
    }
  }
  // pass length window prompt
  while (8 > passwordLength || passwordLength > 128) {
    passwordLength = Number(window.prompt("How long do you want your password? Must be between 8-128"));
  }

  //adding selected criteria to the character set
  for (let i = 0; i < selectedCriteria.length; i++) {

    if (selectedCriteria[i] == "Lowercase") {
      charset += lowerCase;
    } else if (selectedCriteria[i] == "Uppercase") {
      charset += upperCase;
    } else if (selectedCriteria[i] == "Numbers") {
      charset += numbers;
    } else if (selectedCriteria[i] == "Special Characters") {
      charset += specialCharacters;
    }
  }

  // uses password length to pull from character set
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
