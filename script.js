// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// array for number, letters, special characters
var numPassword = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upPassword = [ "A","B","C", "D","E", "F", "G", "H", "I","J","K","L", "M","N","O", "P","Q","R","S","T","U","V","W", "X","Y","Z",];
var lowPassword = ["a","b", "c","d", "e", "f","g", "h", "i","j","k","l","m", "n", "o","p","q","r", "s", "t", "u", "v","w","x","y","z",];
var charPassword = ["!", "@", "#", "$", "%"];
var pwdValue = "";


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  password.value = password;
}

generateBtn.addEventListener("click", writePassword);


// function call generatePassword write the logic in this function
function generatePassword() {
  pwdValue = "";
  
  var userInput= window.prompt("What length of password would you like?");
  // CONVERT PROMPT INPUT into number
  var userResult= Number(userInput);
  
  // TODO: Create password pool from user selection
  // password adds all passwords characters together +=
  // var elements = [numPassword, upPassword, lowPassword, charPassword];
  // var genPassword =[upper, lower, number, char];
  var upper = window.confirm("Would you like uppercase characters?");
  if (upper === true) {
    var upGen = upPassword;
  }

  var lower = window.confirm("Would you like lowercase characters?");
  if (lower === true) {
    var lowGen = lowPassword;
  }

  var number = window.confirm("Would you like numbers ?");
  if (number === true) {
     var numGen = numPassword;
  }

  var char = window.confirm("Would you like special characters?");
  if (char === true) {
    var charGen = charPassword;
    }
    
  
var elementPool= [].concat(upper, lower, number, char);
  console.log(elementPool);
  
//  Generate password
 for (var i = 0; i < userResult; i++) {
      var pwGen = Math.floor(Math.random() * elementPool.length);
      pwdValue += elementPool(pwGen, pwGen + 1);
      
    }

}
// TODO: Render/Display password
password.value = pwdValue;

