// Variables in JavaScript
const namn = "JavaScript";
const version = 1.0;

// Different ways to write sentences with variables
const str1 = "1. Hello " + namn + " version " + version;
const str2 = `2. Hello ${namn} version ${version}`;

// Prints out variable in the console
console.log(str1);
console.log(str2);

// Functions in JavaScript
function hello() {
    const str3 = `Hello function!`;
    console.log(str3);
}

// Call method for function
hello();

// Function for button click
function buttonClick() {
    console.log("You clicked the button");
}

// Click counter
let clicks = 0;
function counter() {
    clicks += 1;
    document.getElementById("clickCounter").innerHTML = clicks;
    if (clicks >= 100) {
        console.log("I see you like clicking");
    }

    if (clicks >= 500) {
        console.log("You really like clicking don't you?");
    }

    if (clicks >= 1000) {
        console.log("Stop it, get some help.");
    }
}
