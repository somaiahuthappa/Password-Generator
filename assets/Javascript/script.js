// Assignment code here

// generate password function
function generatePassword() {
  var charCount = characterCount();
  var choiceChars = "";
  var password = "";

  // function will run if characterCount() is not null.
  if (charCount != null) {

    // select uppercase
    var selectUpper = confirm("Do you want UPPERCASE LETTER in your password?");

    if (selectUpper) {
      choiceChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    // select lowercase 
    var selectLower = confirm("Do you want LOWERCASE LETTERS in your password?");
    if (selectLower) {
      choiceChars += "abcdefghijklmnopqrstuvwxyz";
    }
    // select numbers
    var selectNumbers = confirm("Do you want NUMBERS in your password?");
    if (selectNumbers) {
      choiceChars += "1234567890";
    }
    // select special characters
    var selectSpecial = confirm("Do you want SPECIAL CHARACTERS in your password?");
    if (selectSpecial) {
      choiceChars += "!@#$%^&~()_+}{:/<.,>=-";
    }
    // alert if none of the above parameters have been selected
    if (choiceChars.length == 0) {
      alert("Please choose at least one.");
      return generatePassword();
    };
    // generate random combination
    for (var i = 0; i < charCount; i++) {
      password += choiceChars.charAt(Math.floor(Math.random() * choiceChars.length));
    }
  }
  return password;
}

// function to select password length
function characterCount() {
  var count = 0;

  while (count < 8 || count > 125) {
    count = prompt("Please enter a number between 8 and 125");
    // if statement to prevent a letter selected
    if (isNaN(count)) { count = 0; }
    // if statement to break the loop
    if (count === null) { break; }
  }

  return count;
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



