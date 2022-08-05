const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = document.getElementById("password");

let firstPass = document.getElementById("firstPass");
let secondPass = document.getElementById("secondPass");

password.style.visibility = "hidden";
firstPass.textContent = " ";
secondPass.textContent = " ";

function randomNum(){
    return Math.floor(Math.random() * characters.length);
}

document.getElementById("generate").addEventListener('click', () => {
    let pass1 = [];
    let pass2 = [];

    for (let i = 0; i <= 15; i++) {
        pass1.push(characters[randomNum()]);
        pass2.push(characters[randomNum()]);
    }
    firstPass.textContent = pass1.join("");
    secondPass.textContent = pass2.join("");

})

firstPass.addEventListener('click', () => {
    password.style.visibility = "visible";
    password.textContent = firstPass.textContent;
})

secondPass.addEventListener('click', () => {
    password.style.visibility = "visible";
    password.textContent = secondPass.textContent;
})