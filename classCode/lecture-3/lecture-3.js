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

    alert(`Hello ${name}!`);
}