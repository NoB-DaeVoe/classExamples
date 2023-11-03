// Output in console:
console.log("Hello console!");

function testAlertAndPrompt() {
    // Take input with a prompt:
    const name = prompt("Write your name");

    // Output as alert:
    alert(`Hello ${name}!`);
}

function buttonClick() {
    console.log("buttonClick");
    const name = document.querySelector("#name").value;
    // Works as well, note "name" not "#name"
    //      document.getElementById("name").value;

    document.querySelector("#hello-output").innerText = `Hello ${name}!`;
}

function buttonClickForTimeTrained() {
    console.log("buttonClick");
    const userInput = document.querySelector("#time-trained").value;

    timeTrained = Number(userInput);

    let max = 60;
    let min = 15;

    if (timeTrained === max) {
        document.querySelector("#personal-trainer-output").innerText = `You trained for: ${timeTrained} minutes. Good job! Remember to stretch and rest in between!`;
    }
    else if (timeTrained >= 90) {
        document.querySelector("#personal-trainer-output").innerText = `You trained for: ${timeTrained} minutes. It's good that you like training but now it is TIME TO REST!`;
    }
    else if (timeTrained < min) {
        document.querySelector("#personal-trainer-output").innerText = `Come on now, you should train atleast 15 minutes. YOU CAN DO IT!`;
    }
    else {
        document.querySelector("#personal-trainer-output").innerText = `You trained for: ${timeTrained} minutes. Good, but you can do better!`;
    }
}

// Function argument
function hello(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}!`);
}
hello("George", "Smith");

// Return value
function helloString(name) {
    return `Hello ${name}!`;
}
let returnHelloString = helloString("George");

console.log(returnHelloString);
