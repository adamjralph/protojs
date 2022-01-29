/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

let value = 3;
// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', runProgram);

// Get Input data
function runProgram(e) {

  e.preventDefault();

  let inputData = getInputData();

  HTMLNameElementId(inputData);

};

// Sets the starting value of created <td> element ids to 1
function getStartingValue() {

  let form = document.getElementById('table-display');
  console.log(form);

  let numOfTds = form.childElementCount;
  console.log(numOfTds);

  if (numOfTds === 0) {
    return 1

  } else {
    return (numOfTds += 1) - 1
  }
}

// Gets input data from inputfields and returns array of one string and one number
function getInputData() {

  let name = document.getElementById('nameInput');
  let price = document.getElementById('priceInput');

  return [name.value, parseInt(price.value)];
}

// Remove following line
// HTMLCreateTdElements();

function HTMLCreateTdElements() {

  let tableDisplay = document.getElementById('table-display');
  let newElement = tableDisplay.appendChild(document.createElement('li'));
  newElement.className = 'list-group-item';
  return newElement
}

function HTMLNameElementId(inputData) {

  let firstIndex = inputData[0];
  let secondIndex = inputData[1]
  let count = getStartingValue();


  let i = 2;

  let elementNum = count;
  const itemId = `item-${count}`;
  // const elementNameId = `display-name-${elementNum}`;
  // const elementPriceId = `display-price-${elementNum}`;
  let item = HTMLCreateTdElements().id = itemId;
  assignInputDataToNewElement(firstIndex, secondIndex, itemId);



  // while (i > 0) {

  //   elementNum += 1;

  //   if (i === 2) {
  //     let name = HTMLCreateTdElements().id = elementNameId;
  //     HTMLCreateTdElements().className = 'row';
  //     assignInputDataToNewElement(firstIndex, elementNameId);
  //     console.log(name);

  //   } else if (i === 1) {
  //     let price = HTMLCreateTdElements().id = elementPriceId;
  //     HTMLCreateTdElements().className = 'row';
  //     assignInputDataToNewElement(secondIndex, elementPriceId)
  //     console.log(price);
  //   }

  //   i -= 1;
  // }

  count += 1;
  console.log(count);
  return count
}

function assignInputDataToNewElement(firstIndex, secondIndex, itemId) {

  let getNewElement = document.getElementById(itemId);
  getNewElement.innerText = `${firstIndex} ____ $${secondIndex}`;
}


// export {
//   runProgram,
//   getInputData,
//   HTMLNameElementId
// };