let firstCard = document.getElementById('firstCard');

let secondCard = document.getElementById('secondCard');

let thirdCard = document.getElementById('thirdCard');

let cardNew = document.getElementById('card-3');

let result = document.getElementById('result');

let sumText = document.getElementById('sumText');

let opponentText = document.getElementById('sumOpponent');
opponentText.style.display ="none";

let credit = document.getElementById('credits');


let cardsArr = [];
let sum = 0;
let totalCredits = 10000;

credit.textContent += totalCredits;



function randomNum() {
    let randomNumber = Math.floor(Math.random() * 10) + 2;
    return randomNumber;
}



document.getElementById('draw').addEventListener('click', () => {

    let firstRand = randomNum(); // random 2 - 11
    let secondRand = randomNum();
    cardsArr.push(firstRand);
    cardsArr.push(secondRand);
    for (let i = 0; i < cardsArr.length; i++) {
        sum += cardsArr[i];
    }

    firstCard.textContent = firstRand;
    secondCard.textContent = secondRand;

    sumText.textContent = "SUM: " + sum;

    if (sum < 21) {
        result.textContent = "Do you want to draw a new card?";
    }

    else if (sum == 21) {
        totalCredits += 500;
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "Wohoo! You've got BlackJack!";
    }

    else {
        totalCredits -= 500; 
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "You're out of the game";
        
    }
    
    if (sum > 0) {
        document.querySelector("#draw").disabled = true;
        document.querySelector("#draw").style.cursor = "not-allowed";
    }


})

document.getElementById('secondDraw').addEventListener('click', () => {
    let thirdRand = randomNum();
    sum += thirdRand;

    cardNew.style.display = 'flex';
    thirdCard.textContent = thirdRand;
    
    sumText.textContent = "SUM: " + sum;

    if (sum < 21) {
        result.textContent = "Do you want to draw a new card?";
    }

    else if (sum == 21) {
        totalCredits += 500;
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "Wohoo! You've got BlackJack!";
    }

    else {
        totalCredits -= 500;
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "You're out of the game";
        
    }
    
    
    if (cardsArr.length > 1) {
        document.querySelector("#secondDraw").disabled = true;
        document.querySelector("#secondDraw").style.cursor = "not-allowed";
    }

})

document.getElementById("betHundred").addEventListener('click', () => {
    let sumOpponent = randomNum() + randomNum();

    if (sumOpponent < 10) {
        sumOpponent += randomNum();
    }

    opponentText.textContent = "Opponent's Cards: " +sumOpponent;
    opponentText.style.display = "inline";
    if(sum > sumOpponent) {
        totalCredits += 100;
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "You Win!";
    }

    else if (sum == sumOpponent) {
        totalCredits = totalCredits;
        result.textContent = "Draw";
    }
    else {
        totalCredits -= 100;
        credit.textContent = "Credit: $" + totalCredits;
        result.textContent = "You Lose :(";

    }
})

document.getElementById("betFive").addEventListener('click', () => {
    let sumOpponent = randomNum() + randomNum();

    if (sumOpponent < 10) {
        sumOpponent += randomNum();
    }

    opponentText.textContent = "Opponent's Cards: " +sumOpponent;
    opponentText.style.display = "inline";
    if(sum > sumOpponent) {
        totalCredits += 500;
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "You Win!";
    }

    else if (sum == sumOpponent) {
        totalCredits = totalCredits;
        result.textContent = "Draw";
    }
    else {
        totalCredits -= 500;
        credit.textContent = "Credit: $" + totalCredits;
        result.textContent = "You Lose :(";

    }
})

document.getElementById("betThousand").addEventListener('click', () => {
    let sumOpponent = randomNum() + randomNum();

    if (sumOpponent < 10) {
        sumOpponent += randomNum();
    }

    opponentText.textContent = "Opponent's Cards: " +sumOpponent;
    opponentText.style.display = "inline";
    if(sum > sumOpponent) {
        totalCredits += 1000;
        credit.textContent = "Credit: $ " + totalCredits;
        result.textContent = "You Win!";
    }

    else if (sum == sumOpponent) {
        totalCredits = totalCredits;
        result.textContent = "Draw";
    }
    else {
        totalCredits -= 1000;
        credit.textContent = "Credit: $" + totalCredits;
        result.textContent = "You Lose :(";

    }
})




document.getElementById('restart').addEventListener('click', () => {
    cardsArr = [];
    sum = 0;
    document.querySelector("#draw").disabled = false;
    document.querySelector("#draw").style.cursor = "pointer";
    document.querySelector("#secondDraw").disabled = false;
    document.querySelector("#secondDraw").style.cursor = "pointer";
    cardNew.style.display = "none";
    firstCard.textContent = "";
    secondCard.textContent ="";
    thirdCard.textContent = "";
    sumText.textContent = "";
    result.textContent = "";
    opponentText.textContent = "";
    opponentText.style.display = "none";
})





/*if (sum < 21) {
    console.log("Do you want to draw a new card?");
}
else if (sum === 21) {
    console.log("Wohoo! You've got BlackJank!");
    hasBlackJack = true;
}

else {
    console.log("You're out of the game");
    isAlive = false;
}*/
