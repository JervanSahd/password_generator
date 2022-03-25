// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


// array for number, letters, special characters
var numPassword =[0,1,2,3,4,5,6,7,8,9];
var upPassword =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowPassword =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charPassword =["!","@","#","$","%"];
var pwdLength = 8;
var pwdValue ='';
// password adds all passwords characters together +=
var elements = [numPassword, upPassword, lowPassword, charPassword];
// Write password to the #password input


// function call generatePassword write the logic in this function
  function generatePassword(){
    pwdValue  ='';
    // var genPassword =[upper, lower, number, char];
    var upPwdLength = 26;
    window.confirm("Would you like uppercase characters?");
    // var upper = 
    
    for (var i = 0, i = upPwdLength; i < length; i++) {
    // math  
        upPassword= Math.floor(Math.random() * upPassword.length);
         pwdValue += upPassword.substring(upPassword, upPassword + 1);
    // var upGen = Math.floor(Math.random() * upPassword.length);
      }

  password.value = pwdValue;
  // 
    // var upPwd = upPassword[upGen];
    // for (var i = 0, i = pwdLength; i < length; i++) {
     
      // return upPassword[Math.floor(Math.random() * 26)];
      // var upGen = Math.floor(Math.random() * upPassword.length);
      
      // pwdValue += upPassword(upGen, upGen + 1);
    
    
   }
  console.log(generatePassword);
    
//   var lower = window.confirm("Would you like lowercase characters?");
//   if (lower === true) {
//     // var lowGen = Math.floor(Math.random() * lowPassword.length);
//     for (var i = 0, i = pwdLength; i < length; i++) {
//       var lowGen = Math.floor(Math.random() * lowPassword.length);
//       pwdValue += lowPassword(lowGen, lowGen + 1);
//   }
// }
//   console.log(lower);

//   var number = window.confirm("Would you like numbers ?");
//   if (number === true) {
//     // var numGen = Math.floor(Math.random() * numPassword.length);
   
//     for (var i = 0, i = pwdLength; i < length; i++) {
//       var numGen = Math.floor(Math.random() * lowPassword.length);
//       pwdValue += numPassword(numGen, numGen + 1); 
//     }
//   }
//   console.log(number);

//   var char = window.confirm("Would you like special characters?");
//   if (char === true) {
//     // var charPwd = numPassword[charGen];
//     for (var i = 0, i = pwdLength; i < length; i++) {
//       var charGen = Math.floor(Math.random() * charPassword.length);
//       pwdValue += charPassword(charGen, charGen + 1);
//       // return;
//     }if (upper + lower + number + char === null) {
//       alert("Please check atleast one box!");
//       // return;
//       }
      
//       // console.log(char);
//  }
// } 

// function writePassword() {
//   // 
//   var length = window.prompt("What length?");
//   // length = (pwdLength ++;
//   if (length == false){
//     window.prompt("Please enter a number between 8 and 124")
    
//   }
  
//   }
//   console.log(writePassword);
  generateBtn.addEventListener("click", writePassword);
//   generatePassword();
// // console.log = generatePassword();
  