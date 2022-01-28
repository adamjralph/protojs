/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', runProgram);

// Get Input data
function runProgram(e) {

  getInputData();
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

function getInputData() {

  // let inputDataArray = [];
  let name = document.getElementById('nameInput');
  let price = document.getElementById('priceInput');
  console.log(name.value);
  console.log(price.value);
  return [name.value, price.value]
}


export {
  runProgram,
  getInputData,
};