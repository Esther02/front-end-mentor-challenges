// Initial values
length(0)
volume(0)
mass(0)

// Getting the value from the user and passing it to functions
function getVal() {
  val = document.querySelector('input').value;
  length(val);
  volume(val);
  mass(val);
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
