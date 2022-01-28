/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', runProgram);

// Get Input data
function runProgram(e) {

  getInputData();

  createDisplayTdElement();
  // let name = document.getElementById('nameInput');
  // let price = document.getElementById('priceInput');
  // let tableDisplay = document.getElementById('table-display');

  // let resultItem = document.getElementById('result-item');
  // let resultPrice = document.getElementById('result-price');

  // console.log(name.value);
  // console.log(price.value);
  // console.log(resultItem);
  // console.log(resultPrice);
  // resultItem.innerText = name.value;
  // resultPrice.innerText = price.value;

  e.preventDefault();

};

// Gets input data from inputfields and returns array of one string and one number
function getInputData() {

  let name = document.getElementById('nameInput');
  let price = document.getElementById('priceInput');
  return [name.value, parseInt(price.value)];
}

// Remove following line
HTMLCreateTdElements(1);

function HTMLCreateTdElements(count) {
  const tableDisplay = document.getElementById('table-display');
  let i = 2;
  let elementNum = count;
  let elementId = `display-${elementNum}`;
  while (i > 0) {
    tableDisplay.appendChild(document.createElement('td')).id = elementId;
    console.log(document.getElementById(elementId));
    elementNum += 1;
    elementId = `display-${elementNum}`;
    i -= 1;
  }
  return document.getElementById(elementId);
}



export {
  runProgram,
  getInputData,
  HTMLCreateTdElements
};