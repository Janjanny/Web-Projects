let homeScore = document.getElementById("score1");
let guestScore = document.getElementById("score2");

let homeScoreCount = 0;
let guestScoreCount = 0;


document.getElementById("plusOneHome").addEventListener("click", () => {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount;
})

document.getElementById("plusTwoHome").addEventListener ("click", () => {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;
})

document.getElementById("plusThreeHome").addEventListener('click', () => {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;
})

document.getElementById("plusOneGuest").addEventListener("click", () => {
    guestScoreCount += 1;
    guestScore.textContent = guestScoreCount;
})

document.getElementById("plusTwoGuest").addEventListener("click", () => {
    guestScoreCount += 2;
    guestScore.textContent = guestScoreCount;
})

document.getElementById("plusThreeGuest").addEventListener("click", () => {
    guestScoreCount += 3;
    guestScore.textContent = guestScoreCount;
})