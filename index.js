const convertBtn = document.getElementById("convert-btn");
const switchBtn = document.getElementById("switch-btn");

const inputEl = document.getElementById("convert-input");
const inputSelect = document.getElementById("select-from");
const outputEl = document.getElementById("convert-output");
const outputSelect = document.getElementById("select-to");

const resultEl = document.getElementById("result-el");
resultEl.innerText = "this is the result of the conversion...";

// let numFrom = inputEl.value;

convertBtn.addEventListener("click", function () {
  // const numbers = /^\d+$/;
  const numbers = /^\d+([.]\d+)?$/;

  if (inputEl.value.match(numbers)) {
    convert();
  } else {
    resultEl.innerText = "please enter a number";
  }
});

// FIXME: can't switch empty values, or take continuous switches
// create conditional to combat empty values
switchBtn.addEventListener("click", function () {
  const valBucket = inputSelect.value;
  const inputBucket = inputEl.value;
  // const numbers = /\d+/g;
  const numbers = /\d+([.]\d+)/g;

  // the number from the initial switch isn't "stored"
  // bc when switched back you get 0 in the output and a blank on the input
  // aka nothing to convert
  inputSelect.value = outputSelect.value;
  outputSelect.value = valBucket;

  inputEl.value = outputEl.value;
  // inputEl.value = outputEl.value.match(numbers);
  outputEl.value = inputBucket;

  // maybe add conditional where if selector val is x show x in result text
  // or for loop that loops unit array until it matches the input selector
  resultEl.innerText = `${inputEl.value} = ${outputEl.value}`;

  // convert();
});

function convert() {
  const numFrom = inputEl.value;

  const inputVal = inputSelect.value;
  const outputVal = outputSelect.value;

  if (inputVal === "0" && outputVal === "0") {
    resultEl.innerText = `${numFrom} m = ${numFrom} m`;
    outputEl.value = numFrom + " m";
    // inputEl.value = numFrom + " m";
  } else if (inputVal === "0" && outputVal === "1") {
    kilometers = numFrom / 1000;
    resultEl.innerText = `${numFrom} m = ${parseFloat(
      kilometers.toFixed(9)
    )} km`;
    outputEl.value = parseFloat(kilometers.toFixed(9)) + " km";
  } else if (inputVal === "0" && outputVal === "2") {
    centimeters = numFrom / 0.01;
    resultEl.innerText = `${numFrom} m = ${parseFloat(
      centimeters.toFixed(9)
    )} cm`;
    outputEl.value = parseFloat(centimeters.toFixed(9)) + " cm";
  } else if (inputVal === "0" && outputVal === "3") {
    miles = numFrom * 0.00062137;
    resultEl.innerText = `${numFrom} m = ${parseFloat(miles.toFixed(9))} mi`;
    outputEl.value = parseFloat(miles.toFixed(9)) + " mi";
  } else if (inputVal === "0" && outputVal === "4") {
    feet = numFrom * 3.2808;
    resultEl.innerText = `${numFrom} m = ${parseFloat(feet.toFixed(9))} ft`;
    outputEl.value = parseFloat(feet.toFixed(9)) + " ft";
  } else if (inputVal === "0" && outputVal === "5") {
    inches = numFrom * 39.37;
    resultEl.innerText = `${numFrom} m = ${parseFloat(inches.toFixed(9))} in`;
    outputEl.value = parseFloat(inches.toFixed(9)) + " in";
  } else if (inputVal === "1" && outputVal === "0") {
    meters = numFrom / 0.001;
    resultEl.innerText = `${numFrom} km = ${parseFloat(meters.toFixed(9))} m`;
    outputEl.value = parseFloat(meters.toFixed(9)) + " m";
  } else if (inputVal === "1" && outputVal === "1") {
    resultEl.innerText = `${numFrom} km = ${numFrom} km`;
    outputEl.value = numFrom + " km";
  } else if (inputVal === "1" && outputVal === "2") {
    centimeters = numFrom / 0.00001;
    resultEl.innerText = `${numFrom} km = ${parseFloat(
      centimeters.toFixed(9)
    )} cm`;
    outputEl.value = numFrom + " cm";
  } else if (inputVal === "1" && outputVal === "3") {
    miles = numFrom * 0.62137;
    resultEl.innerText = `${numFrom} km = ${parseFloat(miles.toFixed(9))} mi`;
    outputEl.value = parseFloat(miles.toFixed(9)) + " mi";
  } else if (inputVal === "1" && outputVal === "4") {
    feet = numFrom * 3280.8;
    resultEl.innerText = `${numFrom} km = ${parseFloat(feet.toFixed(9))} ft`;
    outputEl.value = parseFloat(feet.toFixed(9)) + " ft";
  } else if (inputVal === "1" && outputVal === "5") {
    inches = numFrom * 39370;
    resultEl.innerText = `${numFrom} km = ${parseFloat(inches.toFixed(9))} in`;
    outputEl.value = parseFloat(inches.toFixed(9)) + " in";
  } else if (inputVal === "2" && outputVal === "0") {
    meters = numFrom / 100;
    resultEl.innerText = `${numFrom} cm = ${parseFloat(meters.toFixed(9))} m`;
    outputEl.value = parseFloat(meters.toFixed(9)) + " m";
  } else if (inputVal === "2" && outputVal === "1") {
    kilometers = numFrom / 100000;
    resultEl.innerText = `${numFrom} cm = ${parseFloat(
      kilometers.toFixed(9)
    )} km`;
    outputEl.value = parseFloat(kilometers.toFixed(9)) + " km";
  } else if (inputVal === "2" && outputVal === "2") {
    resultEl.innerText = `${numFrom} cm = ${numFrom} cm`;
    outputEl.value = numFrom + " cm";
  } else if (inputVal === "2" && outputVal === "3") {
    miles = numFrom * 0.0000062137;
    resultEl.innerText = `${numFrom} cm = ${parseFloat(miles.toFixed(9))} mi`;
    outputEl.value = parseFloat(miles.toFixed(9)) + " mi";
  } else if (inputVal === "2" && outputVal === "4") {
    feet = numFrom * 0.032808;
    resultEl.innerText = `${numFrom} cm = ${parseFloat(feet.toFixed(9))} ft`;
    outputEl.value = parseFloat(feet.toFixed(9)) + " ft";
  } else if (inputVal === "2" && outputVal === "5") {
    inches = numFrom / 2.54;
    resultEl.innerText = `${numFrom} cm = ${parseFloat(inches.toFixed(9))} in`;
    outputEl.value = parseFloat(inches.toFixed(9)) + " in";
  } else if (inputVal === "3" && outputVal === "0") {
    meters = numFrom / 0.00062137;
    resultEl.innerText = `${numFrom} mi = ${parseFloat(meters.toFixed(9))} m`;
    outputEl.value = parseFloat(meters.toFixed(9)) + " m";
  } else if (inputVal === "3" && outputVal === "1") {
    kilometers = numFrom / 0.62137;
    resultEl.innerText = `${numFrom} mi = ${parseFloat(
      kilometers.toFixed(9)
    )} km`;
    outputEl.value = parseFloat(kilometers.toFixed(9)) + " km";
  } else if (inputVal === "3" && outputVal === "2") {
    centimeters = numFrom / 0.0000062137;
    resultEl.innerText = `${numFrom} mi = ${parseFloat(
      centimeters.toFixed(9)
    )} cm`;
    outputEl.value = parseFloat(centimeters.toFixed(9)) + " cm";
  } else if (inputVal === "3" && outputVal === "3") {
    resultEl.innerText = `${numFrom} mi = ${numFrom} mi`;
    outputEl.value = numFrom + " mi";
  } else if (inputVal === "3" && outputVal === "4") {
    feet = numFrom * 5280;
    resultEl.innerText = `${numFrom} mi = ${parseFloat(feet.toFixed(9))} ft`;
    outputEl.value = parseFloat(feet.toFixed(9)) + " ft";
  } else if (inputVal === "3" && outputVal === "5") {
    inches = numFrom * 63360;
    resultEl.innerText = `${numFrom} mi = ${parseFloat(inches.toFixed(9))} in`;
    outputEl.value = parseFloat(inches.toFixed(9)) + " in";
  } else if (inputVal === "4" && outputVal === "0") {
    meters = numFrom / 3.28084;
    resultEl.innerText = `${numFrom} ft = ${parseFloat(meters.toFixed(9))} m`;
    outputEl.value = parseFloat(meters.toFixed(9)) + " m";
  } else if (inputVal === "4" && outputVal === "1") {
    kilometers = numFrom / 3280.83989501;
    resultEl.innerText = `${numFrom} ft = ${parseFloat(
      kilometers.toFixed(9)
    )} km`;
    outputEl.value = parseFloat(kilometers.toFixed(9)) + " km";
  } else if (inputVal === "4" && outputVal === "2") {
    centimeters = numFrom * 30.47999902;
    resultEl.innerText = `${numFrom} ft = ${parseFloat(
      centimeters.toFixed(9)
    )} cm`;
    outputEl.value = parseFloat(centimeters.toFixed(9)) + " cm";
  } else if (inputVal === "4" && outputVal === "3") {
    miles = numFrom / 5280;
    resultEl.innerText = `${numFrom} ft = ${parseFloat(miles.toFixed(9))} mi`;
    outputEl.value = parseFloat(miles.toFixed(9)) + " mi";
  } else if (inputVal === "4" && outputVal === "4") {
    resultEl.innerText = `${numFrom} ft = ${numFrom} ft`;
    outputEl.value = numFrom + " ft";
  } else if (inputVal === "4" && outputVal === "5") {
    inches = numFrom * 12;
    resultEl.innerText = `${numFrom} ft = ${parseFloat(inches.toFixed(9))} in`;
    outputEl.value = parseFloat(inches.toFixed(9)) + " in";
  } else if (inputVal === "5" && outputVal === "0") {
    meters = numFrom / 39.37009424;
    resultEl.innerText = `${numFrom} in = ${parseFloat(meters.toFixed(9))} m`;
    outputEl.value = parseFloat(meters.toFixed(9)) + " m";
  } else if (inputVal === "5" && outputVal === "1") {
    kilometers = numFrom / 39370.07874016;
    resultEl.innerText = `${numFrom} in = ${parseFloat(
      kilometers.toFixed(9)
    )} km`;
    outputEl.value = parseFloat(kilometers.toFixed(9)) + " km";
  } else if (inputVal === "5" && outputVal === "2") {
    centimeters = numFrom * 2.54;
    resultEl.innerText = `${numFrom} in = ${parseFloat(
      centimeters.toFixed(9)
    )} cm`;
    outputEl.value = parseFloat(centimeters.toFixed(9)) + " cm";
  } else if (inputVal === "5" && outputVal === "3") {
    miles = numFrom / 63360;
    resultEl.innerText = `${numFrom} in = ${parseFloat(miles.toFixed(9))} mi`;
    outputEl.value = parseFloat(miles.toFixed(9)) + " mi";
  } else if (inputVal === "5" && outputVal === "4") {
    feet = numFrom / 12;
    resultEl.innerText = `${numFrom} in = ${parseFloat(feet.toFixed(9))} ft`;
    outputEl.value = parseFloat(feet.toFixed(9)) + " ft";
  } else if (inputVal === "5" && outputVal === "5") {
    resultEl.innerText = `${numFrom} in = ${numFrom} in`;
    outputEl.value = numFrom + " in";
  }
}

// testing changing selector values conditions
// if change either the input or output, clear cooresponding value
function check() {
  // let inputVal = inputSelect.value;
  // let outputVal = outputSelect.value;
  // if (inputVal === "0") {
  //   resultEl.innerText = "the input you chose is meters!";
  // } else if (inputVal === "1") {
  //   resultEl.innerText = "the input you chose is kilometers!";
  // } else if (inputVal === "2") {
  //   resultEl.innerText = "the input you chose is centimeters!";
  // } else if (inputVal === "3") {
  //   resultEl.innerText = "the input you chose is miles!";
  // } else if (inputVal === "4") {
  //   resultEl.innerText = "the input you chose is feet!";
  // } else if (inputVal === "5") {
  //   resultEl.innerText = "the input you chose is inches!";
  // }
}
