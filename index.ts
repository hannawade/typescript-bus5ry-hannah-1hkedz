// You are writing a cost calculator for a parking garage. It costs $3 for the first two hours.
// After the first two hours, it costs $.75 per half hour, which will be rounded up to the nearest
// half-hour. For example, if someone parks for 2 hours and 3 minutes, they will be charged for
// two and a half hours. Customers that stay less than 10 minutes will not be charged at all.
// Please write a small program that will read the number of minutes parked from a text element,
// then prints or updates the cost on the page.

// feel free to add or remove any functions or variables you wish.
// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Park Central Vehicular Storage</h1>`;
