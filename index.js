//Elements
const inputEl = document.getElementById('input-nr');
const lengthEl = document.getElementById('length-conv');
const volumeEl = document.getElementById('volume-conv');
const massEl = document.getElementById('mass-conv');

//generate conversion
function generateConversions() {
  //value from input
  const value = inputEl.value;
  if (value <= 999) {
    //call generate function with correct parameters
    lengthEl.innerHTML = generate('meters', value);
    volumeEl.innerHTML = generate('liters', value);
    massEl.innerHTML = generate('kilograms', value);
  } else {
    //display error message (set due to styling reasons)
    document.getElementById('warningMsg').innerHTML =
      'Sorry, max number for conversion is 999';
    inputEl.value = 0;
  }
}

function generate(unit, value) {
  //starting variables
  let calc = 0;
  let convUnit = '';
  let calc2 = 0;
  //check arguments
  if (unit === 'meters') {
    convUnit = 'feet';
    calc = value * 3.281;
    calc2 = value / 3.281;
  } else if (unit === 'liters') {
    convUnit = 'gallons';
    calc = value * 0.264;
    calc2 = value / 0.264;
  } else {
    convUnit = 'pounds';
    calc = value * 2.204;
    calc2 = value / 2.204;
  }
  //return correct calculations and units with 3 decimals
  return `${value} ${unit} = ${calc.toFixed(
    3
  )} ${convUnit} | ${value} ${convUnit} = ${calc2.toFixed(3)} ${unit}`;
}
