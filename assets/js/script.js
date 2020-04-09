// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

	//check conditions.	
	var passwordLength = prompt("Choose a length of the password between 8 and 128");

	if(passwordLength > 7 && passwordLength < 129){

		//characters allowed?
		var hasCharacters = confirm("Does password include characters?");
		//numbers allowed?
		var hasNumbers = confirm("Does password include numbers?");
		//lower case allowed?
		var hasLowerCaseLetters = confirm("Does password include lower case letters?");
		//upper case allowed?
		var hasUpperCaseLetters = confirm("Does password include upper case letters?");

		// console.log("Length of password :" + passwordLength);
		// console.log("Has characters? :" + hasCharacters + "\n" +
		// 			"Has numbers? :" + hasNumbers + "\n" +
		// 			"Has lower case? :" + hasLowerCaseLetters + "\n" +
		// 			"Has upper case? :" + hasUpperCaseLetters + "\n" 
		// 			);
	

	//construct password based on conditions
	
	var newMergedArray = [];

	if(hasCharacters)
		newMergedArray = newMergedArray.concat(specialCharacters);
	
	if(hasNumbers)
		newMergedArray = newMergedArray.concat(numericCharacters);
	
	if(hasLowerCaseLetters)
		newMergedArray = newMergedArray.concat(lowerCasedCharacters);
	
	if(hasUpperCaseLetters)
		newMergedArray = newMergedArray.concat(upperCasedCharacters);		
	


	// console.log(newMergedArray);
	// console.log("merged array length" + newMergedArray.length);

	var newPasswordArr = [];
	
	for(var i = 0; i < passwordLength; i++){
		var randomIndex = getRandomInt(newMergedArray.length-1)
		// console.log("fetched random item index : " + randomIndex);		
		var randomItemFetched = newMergedArray[randomIndex];
		// console.log("Item fetched at index " + randomIndex + ' is ' + randomItemFetched);
		newPasswordArr.push(newMergedArray[randomIndex]);
	}

	// console.log("Password array is :" + newPasswordArr.join(''));

	return newPasswordArr.join('');

	}else{
		alert("Choose a length of the password between 8 and 128 only!");
		return '';
	}

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
