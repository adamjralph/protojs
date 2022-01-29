/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

let sum = [1, 2, 3, 4];
console.log(sum);

function calculateTotal(inputData, total) {
  return newTotal
}

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', runProgram);

// Get Input data
function runProgram(e, sum) {

  e.preventDefault();

  let inputData = getInputData();

  HTMLNameElementId(inputData);

  let total = calculateTotal(inputData);
  let newTotal = sum.push(total);
  console.log(newTotal);

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

  return [name.value, parseInt(price.value)];
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



// export {
//   runProgram,
//   getInputData,
//   HTMLNameElementId
// };