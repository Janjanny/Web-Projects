let inputField = document.getElementById('input-field');
let convertBtn = document.getElementById('convert');

let lengthResult = document.getElementById('length-result');
let volumeResult = document.getElementById('volume-result');
let massResult = document.getElementById('mass-result');

lengthResult.style.visibility = 'hidden';
volumeResult.style.visibility = 'hidden';
massResult.style.visibility = 'hidden';

convertBtn.addEventListener('click', () => {
    let meter = inputField.value * 3.281;
    let feet = inputField.value / 3.281;

    let liters = inputField.value * 0.264;
    let gallons = inputField.value / 0.264;

    let kilos = inputField.value * 2.204;
    let pound = inputField.value / 2.204;

    lengthResult.textContent = `${inputField.value} meters = ${meter.toFixed(3)} feet | ${inputField.value} feet = ${feet.toFixed(3)} meters`;

    volumeResult.textContent = `${inputField.value} liters = ${liters.toFixed(3)} gallons | ${inputField.value} gallons = ${gallons.toFixed(3)} liters`;

    massResult.textContent = `${inputField.value} kilos = ${kilos.toFixed(3)} pound | ${inputField.value} pound = ${kilos.toFixed(3)} pound`;



    massResult.style.visibility = 'visible';
    volumeResult.style.visibility = 'visible'
    lengthResult.style.visibility = 'visible';

    

})