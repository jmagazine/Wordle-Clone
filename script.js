"use strict";
const letters = [];
(function configureLetters() {
  const row0 = document.querySelectorAll(".keyboard-row")[0];
  const letters0 = row0.querySelectorAll(".letter");
  const row1 = document.querySelectorAll(".keyboard-row")[1];
  const letter1 = row1.querySelectorAll(".letter");
  const row2 = document.querySelectorAll(".keyboard-row")[2];
  const letters2 = row2.querySelectorAll(".letter");
  const rows = [row0, row1, row2];
  rows.forEach((row) => {
    let list = row.querySelectorAll(".letter");
    for (let i = 0; i < list.length; i++) {
      letters.push(list[i]);
    }
  });
})();

letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    letter.classList.add("vibrate");
  });
  letter.addEventListener("animationend", () => {
    letter.classList.remove("vibrate");
  });
});

addEventListener("keypress", (event) => {
  //   try {
  document.getElementById(event.key.toUpperCase()).classList.add("vibrate");
  //   } catch (ignored) {
  //     console.log("breh");
  //   }
});
