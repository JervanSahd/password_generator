// Assignment Code
var generateBtn = document.querySelector("#generate");


// array for number, letters, special characters
var numbers =[0,1,2,3,4,5,6,7,8,9];
var upper =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var characters =["!","@","#","$","%"];

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
getRandomUpper();
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	var symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// function call generatePassword write the logic in this function
function generatePassword(){
  var userChoice = window.prompt("");
    // var upper = document.getElementById("upperCase").checked;
    // var lower = document.getElementById("lowerCase").checked;
    // var number = document.getElementById("number").checked;
    // var symbol = document.getElementById("symbol").checked;
    // if (upper + lower + number + symbol === 0) {
    //   alert("Please check atleast one box!");
    //   return;
    // }
    // var passwordBox = document.getElementById("passwordBox");
    // var length = document.getElementById("length");
    // let password = "";
    // while (length.value > password.length) {
    //   let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    //   let isChecked = document.getElementById(keyToAdd.name).checked;
    //   if (isChecked) {
    //     password += keyToAdd();
    //   }
    // }
    // passwordBox.innerHTML = password;


}

// Write password to the #password input
function writePassword() {

  // math 
  
  // password adds all passwords characters together +=

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');


var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	var textarea = document.createElement('textarea');
	var password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	var length = +lengthEl.value;
	var hasLower = lowercaseEl.checked;
	var hasUpper = uppercaseEl.checked;
	var hasNumber = numbersEl.checked;
	var hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			var funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	var finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}









// SOCIAL PANEL JS
var floating_btn = document.querySelector('.floating-btn');
var close_btn = document.querySelector('.close-btn');
var social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});