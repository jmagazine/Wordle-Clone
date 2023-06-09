const word = "hello";

let attempt = 0;

var guess = [];

function addLetter(letter) {
  return guess.length < 5 && guess.push(letter) && updateGame();
}

function deleteLetter() {
  return guess.length > 0 && guess.pop() && updateGame();
}

function updateGame() {
  let currentRow = document.querySelectorAll(".square-row-container")[attempt];
  for (let i = 0; i < 5; i++) {
    let span = document.getElementById(`${i}`);
    span.innerText = guess[i] != undefined ? guess[i] : "";
  }
}

console.log(guess);
export { addLetter, deleteLetter, updateGame };
