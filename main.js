// Get the DOM elements
let btn = document.querySelector(".btn");
let fortune = document.querySelector(".fortune");
let resetFortune = document.querySelector(".resetfortune");

// Hold the timeout
let timeout;

// The fortune responses
let fortunes = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

// Loading messages to display before showing fortune
let loading = [
  "Consulting the spirits...",
  "Gazing into the depths of the future...",
  "BRB, jumping into my time machine...",
  "I see... I see...",
];

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {Array}       The shuffled array
 */

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// This no longer worked when adding the time delay
// Create a new, shuffled array from fortunes
// let shuffledFortunes = shuffle(Array.from(fortunes));

// Get a random fortune from shuffled fortunes
function getFortunes() {
  // Show a loading message
  shuffle(loading);
  fortune.textContent = loading[0];

  // Clear any existing fortunes
  clearTimeout(timeout);

  // Set the fortune to show in 2 seconds
  timeout = setTimeout(function () {
    shuffle(fortunes);
    fortune.textContent = fortunes[0];
  }, 2000);
}

// Listen for clicks on the button
btn.addEventListener("click", getFortunes);
