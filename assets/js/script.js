// VARIABLE NAME DECLARATIONS
var passwordLength;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
var result;

// PASSWORD CHARACTER ARRAYS
const symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// GENERATE BUTTON EVENT LISTENER
var generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// GENERATE PASSWORD FUNCTION W/ ALERTS & CONDITIONS
function generatePassword() {

// ENSURING INPUT IS INTEGER
    passwordLength = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128 characters."));

// PASSWORD LENGTH CONDITIONS
    if (!passwordLength) {
        alert("You need to input a value.");
        return "Error";
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("You must choose between 8 and 128 characters."));
    } else {
        confirmNumber = confirm("Do you want to include numbers?");
        confirmSymbol = confirm("Do you want to include symbols?");
        confirmUppercase = confirm("Do you want to include uppercase letters?");
        confirmLowercase = confirm("Do you want to include lowercase letters?");
    }; 

// CONDITIONS FOR EVERY COMBINATION
    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        result = alert("You must agree to at least one of the options.");
    } else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
        result = symbol.concat(number, lowercase, uppercase);
    } else if (confirmSymbol && confirmNumber && confirmUppercase) {
        result = symbol.concat(number, uppercase);
    } else if (confirmSymbol && confirmNumber && confirmLowercase) {
        result = symbol.concat(number, lowercase);
    } else if (confirmSymbol && confirmLowercase && confirmUppercase) {
        result = symbol.concat(lowercase, uppercase);
    } else if (confirmNumber && confirmLowercase && confirmUppercase) {
        result = number.concat(lowercase, uppercase);
    } else if (confirmSymbol && confirmNumber) {
        result = symbol.concat(number);
    } else if (confirmSymbol && confirmLowercase) {
        result = symbol.concat(lowercase);
    } else if (confirmSymbol && confirmUppercase) {
        result = symbol.concat(uppercase);
    } else if (confirmLowercase && confirmNumber) {
        result = lowercase.concat(number);
    } else if (confirmLowercase && confirmUppercase) {
        result = lowercase.concat(uppercase);
    } else if (confirmNumber && confirmUppercase) {
        result = number.concat(uppercase);
    } else if (confirmSymbol) {
        result = symbol;
    } else if (confirmNumber) {
        result = number;
    } else if (confirmLowercase) {
        result = lowercase;
    } else if (confirmUppercase) {
        result = uppercase;
    };

// PASSWORD CHARACTER RANDOMIZER LOOP
    var password = [];
    for (var i = 0; i < passwordLength; i++) {
        var pickResult = result[Math.floor(Math.random() * result.length)];
        password.push(pickResult);
    }

// RESULT OF RANDOMIZER JOINED TOGETHER
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// RESULT PUSHED TO DOM TO BE DISPLAYED FOR USER
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}