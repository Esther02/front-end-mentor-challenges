// Get the user input.(standar input to begin with)
// Create functions with the convertion of the user input (e.g. meters to feet and viceversa)
// Display them inside the html elements.

// let userInput = document.getElementById("unit").textContent = 18;

let error = document.getElementById("error");
let userInput = document.getElementById("submitbutton").onclick = function() {
  return parseInt(document.getElementById("myText").value)
}

function length() {
    let meterToFeet = userInput * 3.28084
    let feetToMeter = userInput * 0.3048
    let length = document.getElementById("length")
    length.textContent = `${userInput} meters = ${meterToFeet.toFixed(3)} feet | ${userInput} feet = ${feetToMeter.toFixed(3)} meters`
};

function volume() {
    let litresToGallons = userInput * 0.264172
    let gallonsToLitres = userInput * 3.785412
    let volume = document.getElementById("volume")
    volume.textContent = `${userInput} litres = ${litresToGallons.toFixed(3)} gallons | ${userInput} gallons = ${gallonsToLitres.toFixed(3)} litres`
};

function mass() {
    let kiloToPounds = userInput * 2.2
    let poundsToKilo = userInput / 2.2046
    let mass = document.getElementById("mass")
    mass.textContent = `${userInput} kilos = ${kiloToPounds.toFixed(3)} pounds | ${userInput} pounds = ${poundsToKilo.toFixed(3)} kilos`
};

function errorMessage() {
    if (userInput.match(/^((?!(abc|def)).)*$/) ) {
        return error.textContent = "You need to write a valid number"
    }
};

length()
volume()
mass()
