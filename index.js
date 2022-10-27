// document.getElementById("count").innerText = 5

//initialize count as 0
// listen for clicks on button
//increment the count when button clicked
//change count-el in html to show new clicks

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let previousCount = count + " - ";
  saveEl.innerText += previousCount;
  console.log(count);
}
