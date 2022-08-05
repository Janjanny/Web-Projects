let count = document.getElementById("count");
let btn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

let people = 0;



function increment() {
    people += 1;
    count.textContent = people;
}

function decrement () {
    if (people <= 0) {
        count.textContent = 0;
    }
    else {
        people -= 1;
        count.textContent = people;
    }
}

function save() {
    let template = people + " - ";
    saveEl.textContent += template;
    people = 0;
    count.textContent = 0;
}