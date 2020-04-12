// gotta set up the arrays
//array for special character to be included 
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-", "+"];
//array for numeric characters to be included
var numberChar = [0,1,2,3,4,5,6,7,8,9];
//****array for lowercase characters to be included*****
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//array for uppercase characters to be included
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// setting up booleans to run with the confirm method in generatePassword () function 
var haveUpper = false;
var haveSpecial = false;
var haveNumber = false;

// set up a var for the minimum length of password which we will confirm method in the generatePassword () function
var haveMinLength = 8;

// Set variable for password itself outside of a function for global scope, so that the whole site has access to this var, thus when var password is placed in local with the functions the variable value is not overriden and encounters error
var password = '';

//function to make the password 
function generatePassword() {
  // this code block has the variable for character options with the confirm method prompting the user if they wish to include the characters
  var haveUpper = confirm("Do you want uppercase characters?");
  var haveSpecial = confirm ("Do you want special characters?");
  var haveNumber = confirm("Do you want numbers in you password?");
  //console.log to make sure the prompts boolean values are running, console displays a either true or false
  console.log(haveUpper, haveSpecial, haveNumber);
 
  //prompts for length of the password and the minimum lengths
    var haveMinLength = prompt ("what is the length of your password? Password must be between 8 to 128 characters.");

    //if statements for minimum lengths with the number having to be between 8 to 128 
    if (haveMinLength < 8 || haveMinLength > 128 ) {
      // if the value does meet the minimum of 8 or exceeds 128 then the user will be prompted again
      haveMinLength = prompt ("please make sure that password has between 8 to 128 characters");
    } 
    // if the password has upper character add to existing lowercase array with .concat 
    if (haveUpper === true) {
      lowercaseChar = lowercaseChar.concat(uppercaseChar);
    } 
    // if the password has special character add to the existing lowercase array 
    if (haveSpecial === true) {
      lowercaseChar = lowercaseChar.concat(specialChar);
    } 
    // if the password has numbers add to the existing lowercase array
    if (haveNumber === true) {
      lowercaseChar = lowercaseChar.concat(numberChar);
    }
    // make sure the array of lowercaseChar is passing through console
    console.log(lowercaseChar);

    // lowercaseChar array will have the other character added into the array based on the user answers to the prompts to include them
    
    // the loop will be used for running the array of the lowercaseChar var with or without the other character options being added to it's array based on the user's answers to prompt in the previous function
    // the first part of the for loop is statement 1 which set var i equal to zero, statement 2 is the condition for which the for loop to run which is i must be less than the value of haveMinLength var which is 8, statement 3 increases the value of the i var by one after each time the code block runs. i++ is the same as i = i + 1
    for (var i = 0; i < haveMinLength; i++) {
      // this code block will run each time and will use Math.floor to return the largest integer less than or equal to that of the length of lowercaseChar array times Math.random, which returns the a pseudo-random number between 0 and 1
      // Math.floor and Math.random function will run inside of the array of lowercaseChar
       password = password + lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]
       console.log(password);
    }

    //return the password after the for loop
    return password;
}


// targeting the generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
