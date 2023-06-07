'use strict';

console.log('here');
const row0 = document.querySelectorAll(".keyboard-row")[0];
const letters0 = row0.querySelectorAll(".letter");
const row1= document.querySelectorAll(".keyboard-row")[1];
const letter1 = row1.querySelectorAll(".letter");
const row2 = document.querySelectorAll(".keyboard-row")[1];
const letters2 = row2.querySelectorAll(".letter");
console.log(row0, row1, row2);

rows = [row0, row1, row2];

rows.array.forEach(row => {
    for(let i = 0; i < row.length; i++){
        row[i].addEventListener('click', function(){
            console.log('hi');
        })
    }
});

