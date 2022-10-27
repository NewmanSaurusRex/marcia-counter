// document.getElementById("count").innerText = 5

//initialize count as 0
// listen for clicks on button
//increment the count when button clicked
//change count-el in html to show new clicks

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
