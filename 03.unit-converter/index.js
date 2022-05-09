// Initial values
length(0)
volume(0)
mass(0)

// themes
function greenColor() {
  removeColor()
  document.getElementById("background-color").classList.add("green-color")
}

function blueColor() {
  removeColor()
  document.getElementById("background-color").classList.add("blue-color")
}

function orangeColor() {
  removeColor()
  document.getElementById("background-color").classList.add("orange-color")
}

function pinkColor() {
  removeColor()
  document.getElementById("background-color").classList.add("pink-color")
}

// Removing other colour classes when selecting one so it can be selected more than once

function removeColor() {
  document.getElementById("background-color").classList.remove("green-color", "blue-color", "orange-color", "pink-color")
}

// Getting the value from the user
function getVal() {
  val = document.querySelector('input').value;
  errorMessage(val)
}

// Error message when the quantity goes below 0
function errorMessage(userInput) {
  if (userInput < 0) {
    let error = document.getElementById("error");
    error.textContent = "Please use a value above 0"
  } else {
    error.textContent = ""
    length(userInput);
    volume(userInput);
    mass(userInput);
  }
}

function length(userInput) {
  let meterToFeet = userInput * 3.28084;
  let feetToMeter = userInput * 0.3048;
  let length = document.getElementById("length");
  length.textContent = `${userInput} meters = ${meterToFeet.toFixed(3)} feet |
                        ${userInput} feet = ${feetToMeter.toFixed(3)} meters`;
};

function volume(userInput) {
  let litresToGallons = userInput * 0.264172;
  let gallonsToLitres = userInput * 3.785412;
  let volume = document.getElementById("volume");
  volume.textContent = `${userInput} litres = ${litresToGallons.toFixed(3)} gallons |
                        ${userInput} gallons = ${gallonsToLitres.toFixed(3)} litres`;
};

function mass(userInput) {
  let kiloToPounds = userInput * 2.2;
  let poundsToKilo = userInput / 2.2046;
  let mass = document.getElementById("mass");
  mass.textContent = `${userInput} kilos = ${kiloToPounds.toFixed(3)} pounds |
                      ${userInput} pounds = ${poundsToKilo.toFixed(3)} kilos`;
};
