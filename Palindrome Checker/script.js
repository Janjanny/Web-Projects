let input = document.getElementById("input");
let result = document.getElementById("title");

function check() {
    let str = toString(input.textContent);
    let newStr = str.split(/[\W_]/).join("").toLowerCase();
    let reverseStr = newStr.split("").reverse().join("").toLowerCase();
    if (newStr == reverseStr) {
        return result.textContent = "True";
    }
    else {
        return result.textContent = "False";
    }
}
