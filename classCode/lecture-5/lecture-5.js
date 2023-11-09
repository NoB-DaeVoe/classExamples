// Same principle but one alternative is better than the other
// Don't do it like this:
const names = ["coffee", "Donut"];
const prices = [3, 3.5];
const stock = [100, 15];

// Using a FOR-loop
for (let i = 0; i < names.lenght; i++) {
    console.log(`One ${names[i]} costs: ${prices[i]}€, and we have ${stock[i]} in stock.`);
}

console.log("-----------------")

// Instead do it like this:
const products = [
    { name: "Coffee", price: 3, stock: 100 },
    { name: "Donut", price: 3.5, stock: 15 },
    { name: "Ice Cream", price: 4, stock: 45 }
]

// Can also divide like this:
/* 

const products = [
    {
        name: "Coffee",
        price: 3,
        stock: 100
    },
    {
        name: "Donut",
        price: 3.5,
        stock: 15
    }
]

*/

// Using a FOR-loop
for (const product of products) {
    console.log(`One ${product.name} costs: ${product.price}€, and we have ${product.stock} in stock.`);
}

console.log("-----------------")

// FOR-IN-loop to make a table:
for (const i in products) {
    document.querySelector(`#products-list`).innerHTML += `
        <tr>
            <td>${1 + Number(i)}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price} €</td>
            <td>${products[i].stock}</td>
        </tr>
    `;
}

function oneMinute() {
    let secounds = 60;
    const myTimer = setInterval(function () {
        console.log(secounds);

        if (secounds > 0) {
            secounds--;
            document.querySelector(`#timer`).innerHTML = secounds;
        }
        else {
            document.querySelector(`#timer`).innerHTML = "Eggs Are Done!";
            clearInterval(myTimer);
        }
    }, 1000);
}

/*

let timerCounter = 0;
function timerHandler() {
    console.log(timerCounter);
    timerCounter++;
    if (timerCounter > 20) clearInterval(myOtherTimer);
}

const myOtherTimer = setInterval(timerHandler, 500);

*/

// Date and time
const d = new Date();
document.querySelector("#today").innerHTML = `
    Date: ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} 
    Time: ${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}
`;

// Traditional way of making a function:
function traditional() {
    return "traditional";
}
console.log(traditional());

// Function using arrow syntax:
const arrow = () => "arrow";
console.log(arrow());
