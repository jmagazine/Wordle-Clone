const word = "hello";

let attempt = 0;

const guess = "hello".split("");

function addLetter(letter) {
  return guess.length < 5 && guess.push(letter) && update();
}

function deleteLetter() {
  return guess.length > 0 && guess.pop() && update();
}

function update() {
  let currentRow = document.querySelectorAll(".square-row-container")[0];
  console.log(currentRow);
  for (let i = 0; i < guess.length; i++) {
    let box = currentRow.querySelectorAll(".square")[i];
    console.log(box);
    box.innerText = guess[i];
  }
}
update();

console.log(guess);
