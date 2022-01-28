/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', getInputData);

// Get Input data
function getInputData(e) {

  let name = document.getElementById('name');
  let price = document.getElementById('price');
  let tableDisplay = document.getElementById('table-display');

  let resultItem = document.getElementById('result-item');
  let resultPrice = document.getElementById('result-price');

  console.log(name.value);
  console.log(price.value);
  console.log(resultItem);
  console.log(resultPrice);
  resultItem.innerText = name.value;
  resultPrice.innerText = price.value;

  e.preventDefault();

};


export {
  getInputData,
};