// let btn = document.querySelector(".btn");
// let fortune = document.querySelector("#fortune");

// function getFortune() {
//   fortune.textContent = `You're going to have a wonderful day!`;
// }

// btn.addEventListener("click", getFortune);

// Get the DOM elements
let btn = document.querySelector(".btn");
let fortune = document.querySelector(".fortune");

/**
 * Get the fortune and render it into the DOM
 */
function getFortune() {
  fortune.textContent = `You're going to have a wonderful day!`;
}

// Listen for clicks on the button
btn.addEventListener("click", getFortune);
