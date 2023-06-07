const word = "hello";

let attempt = 0;

const guess = [];

function addLetter(letter) {
  return guess.length < 5 && guess.push(letter);
}

function deleteLetter() {
  return guess.length > 0 && guess.pop();
}

function evaluate() {
  arr;
}
