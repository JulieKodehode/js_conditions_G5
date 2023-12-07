console.log("Hello World");

// Conditional statements / betingelse uttrykk

// if / else statement

// = setting value
// == checking value
// === checking value and datatype
// < over then
// > lesser then
// <= over or equal too
// >= lesser or equal too

// Declaring a variable
const userName = "Julie";

// Checking what datatype "Julie" is
console.log(typeof "Julie");

// An if / else statement to check if your name equals to Julie (and if the same datatype is used in the variable and the statement)
if (userName === "Julie") {
	console.log("Your name is Julie");
} else {
	console.log("Your name is not Julie");
}

// Declaring a variable
const userAge = 11;

// An if / else statement to check if you are over or equal to 18 years old
if (userAge <= 18) {
	console.log("You are over 18 years old.");
} else {
	console.log("You are under 18 years old.");
}

// An if / else statement to check if your name is Julie AND you are over or equal to 18 years old
if (userName === "Julie" && userAge <= 18) {
	console.log("Your name is Julie and you are over 18 years old");
} else {
	console.log("Your name is not Julie and you are under 18 years old");
}

// An if / else statement to check if your name is Julie OR you are over or equal to 18 years old
if (userName === "Julie" || userAge <= 18) {
	console.log("Your name is not Julie or you are under 18 years old");
} else {
	console.log("Your name is Julie or you are over 18 years old");
}

// Pause til 11:00 🎉

// Make an if / else statement that signs us into a page

const theName = "Julie";
const age = 26;
const isBlocked = false;
let isLoggedIn = false;
const isAdmin = false;
let page;

// This conditinal takes three values and checks if user should be signed in or not.
// Two variables are changed if this is true
// An example of DOMM to display result on website
if (theName === "Julie" && age >= 18 && isBlocked === false) {
	isLoggedIn = true;
	page = "/homepage";
	// console.log("You are logged in to homepage");
	console.log(`Welcome back ${theName}! You have logged in to ${page}`);

	const display = document.getElementById("display");
	display.textContent = `Welcome back ${theName}! You have logged in to ${page}`;
} else {
	console.log("You are not logged in");
}
