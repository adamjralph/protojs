/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Set storage value to zero
localStorage.setItem('value', 0)

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', runProgram);

// Get Input data
function runProgram(e, sum) {

  e.preventDefault();

  let inputData = getInputData();

  // Add price to local storage
  let total = addPriceToLocalStorage(inputData[1]);

  // Display total in UI
  displayTotalInUi(total);

  HTMLNameElementId(inputData);

};

// Sets the starting value of created <td> element ids to 1
function getStartingValue() {

  let form = document.getElementById('table-display');
  console.log(form);

  let numOfLi = form.childElementCount;
  console.log(numOfLi);

  if (numOfLi === 0) {
    return 1

  } else {
    return (numOfLi += 1) - 1
  }
}

// Gets input data from inputfields and returns array of one string and one number
function getInputData() {

  let name = document.getElementById('nameInput');
  let price = document.getElementById('priceInput');



  return [name.value, parseFloat(price.value)];
}

function HTMLCreateTdElements() {

  let tableDisplay = document.getElementById('table-display');
  let newElement = tableDisplay.appendChild(document.createElement('li'));
  newElement.className = 'list-group-item';
  return newElement
};

function HTMLNameElementId(inputData) {

  let firstIndex = inputData[0];
  let secondIndex = inputData[1]
  let count = getStartingValue();

  let elementNum = count;
  const itemId = `item - ${count}`;
  let item = HTMLCreateTdElements().id = itemId;
  assignInputDataToNewElement(firstIndex, secondIndex, itemId);

  count += 1;
  return count
};

function assignInputDataToNewElement(firstIndex, secondIndex, itemId) {

  let getNewElement = document.getElementById(itemId);
  getNewElement.innerText = `${firstIndex} ____ $${secondIndex}`;
};

function addPriceToLocalStorage(price) {

  console.log(price);
  let initialValue = parseFloat(localStorage.getItem('value'));
  let newValue = initialValue + parseFloat(price);
  localStorage.setItem('value', newValue);
  return localStorage.getItem('value');
}

function displayTotalInUi(total) {

  let getTotalElement = document.getElementById('total');
  getTotalElement.value = total;
}



// export {
//   runProgram,
//   getInputData,
//   HTMLNameElementId
// };