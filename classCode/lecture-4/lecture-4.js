// += is practical to add content into a tag:
document.querySelector('#list').innerHTML += '<li>Three</li>';

// FOR-loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// How to change or add values in a array
const colors = ["red", "green", "blue"];
console.log(colors);
colors[2] = "yellow";
console.log(colors);
colors.push("blue")
console.log(colors);

// Search what index g has
console.log(colors.indexOf("g"))

// How to split a string into different values into an array
const myStr = "Hello World!";
const helloArr = myStr.split(" ");
console.log(helloArr);

const myStr2 = "Hello, World!";
const helloArr2 = myStr.split(", ");
console.log(helloArr2);

const myStr3 = helloArr2.join(" ");
console.log(myStr3);

// Create a object:
const person = {
    name: "George",
    age: 20,
    likes: "to code"
}
console.log(person.name);

person.name = "Linus";
console.log(person.name);

person.pet = "dog";
console.log(person);

person.toDo = ["eat", "sleep", "code"];
console.log(person);
console.log(person.toDo[2]);

// Add element into an array
person.toDo.push("repeat");
console.log(person);

person.vehicle = { type: "car", brand: "Tesla" };
console.log(person);
console.log(person.vehicle.brand);

console.log("---------------------------");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log("---------------------------");

// An array of objects:
const colorsArr = [
    { name: "Red", hex: "#ff0000" },
    { name: "Green", hex: "#00ff00" },
    { name: "Blue", hex: "#0000ff" }
]

// Print out a specific object and its attribute:
console.log(colorsArr[2].name);

for (let i = 0; i < colorsArr.length; i++) {
    console.log(`color name: ${colorsArr[i].name}, color hex: ${colors[i].hex}`);
}
console.log("---------------------------");

// FOR-of-loop:
for (const color of colors) {
    console.log(color);
}
console.log("---------------------------");

// FOR-of-loop (array of objects)
for (const color of colorsArr) {
    document.querySelector("#colors").innerHTML += `
    <li style="color: ${color.hex}">${color.name}</li>
    `;
}
console.log("---------------------------");

// FOR-in-loop (array of objects)
for (let i in colorsArr) {
    console.log(colorsArr[i]);
}

// Change CSS-atributes  element.style
document.querySelector("#title").style.color = 'blue';
document.querySelector("#title").style.fontFamily = 'Arial';
document.querySelector("#title").style.backgroundColor = 'rgb(200,200,255)';

const arcadaUrl = document.querySelector("#arcada-link").href;

// Own made up attributes
const arcadaCity = document.querySelector("#arcada-link").getAttribute("data-city");
console.log(`Arcada is in ${arcadaCity}`);

// Loop many elements with selector
document.querySelectorAll(".important").forEach(function (elem) {
    console.log(elem)
    
    document.querySelector("#important-words").innerHTML += `
        <li>${elem.innerHTML}</li>
    `;
});
