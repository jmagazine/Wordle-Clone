const word = "hello".split("");
let active = true;
let attempt = 0;

let guess = [];
let currentRow = document.querySelectorAll(".square-row-container")[attempt];

function addLetter(letter) {
  return active && guess.length < 5 && guess.push(letter) && updateGame();
}

function deleteLetter() {
  return active && guess.length > 0 && guess.pop() && updateGame();
}

function updateGame() {
  for (let i = 0; i < 5; i++) {
    let span = document.getElementById(`${attempt}${i}`);
    span.innerText = guess[i] != undefined ? guess[i] : "";
  }
}

function evaluate() {
  if (guess.length === 5) {
    console.log(guess);
    for (let i = 0; i < guess.length; i++) {
      let square = currentRow.childNodes[2 * i + 1];
      if (word.includes(guess[i])) {
        if (guess[i] === word[i]) {
          // change color of square to green
          square.style.backgroundColor = "green";
        } else {
          // change color to yellow
          square.style.backgroundColor = "yellow";
        }
      } else {
        // change colors to gray
        square.style.backgroundColor = "gray";
      }
    }
    let correct = () => {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== word[i]) {
          return false;
        }
      }
      return true;
    };

    // correct guess
    if (correct()) {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(".popup").innerText = "You won";
      let game = document.getElementById("game");
      for (const node of game.childNodes) {
        if (node !== document.querySelector(".popup")) {
          try {
            node.classList.add("blur");
          } catch {}
        }
      }
      let keyboard = document.querySelector(".keyboard-container");
      keyboard.classList.add("blur");

      active = false;
    }

    // max attempts
    if (attempt === 4) {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(
        ".popup"
      ).innerText = `You lose. The word was ${word.join("")} :(.`;
      active = false;
    }
    guess = [];
    attempt++;
    currentRow = document.querySelectorAll(".square-row-container")[attempt];
  }
}
export { addLetter, deleteLetter, updateGame, evaluate, active };
