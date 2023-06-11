"use strict";
import { active, addLetter, deleteLetter, evaluate } from "./game.js";
const row0 = document.querySelectorAll(".keyboard-row")[0];
const letters0 = row0.querySelectorAll(".key");
const row1 = document.querySelectorAll(".keyboard-row")[1];
const letter1 = row1.querySelectorAll(".key");
const row2 = document.querySelectorAll(".keyboard-row")[2];
const letters2 = row2.querySelectorAll(".key");
const rows = [row0, row1, row2];
const letters = [];
rows.forEach((row) => {
  let list = row.querySelectorAll(".key");
  for (let i = 0; i < list.length; i++) {
    letters.push(list[i]);
  }
});

letters.forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.add("vibrate");
  });
  key.addEventListener("animationend", () => {
    key.classList.remove("vibrate");
  });
});

// for letters
addEventListener("keypress", (event) => {
  try {
    document.getElementById(event.key.toUpperCase()).classList.add("vibrate");
    addLetter(event.key);
  } catch (ignored) {}
});

addEventListener("keydown", (event) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    deleteLetter();
  }
  if (event.key === "Enter") {
    evaluate();
  }
});
