/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', getInputData);

// Get Input data
function getInputData(e) {
  console.log('Testing');
  e.preventDefault();

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

  // Create a for each

  // let nameDiv = document.createElement('div');
  // nameDiv.id = 'name-display';
  // let nameText = document.getElementById('name-display');

  // console.log(nameDiv);
  // nameText.innerText = name.value;
  // tableDisplay.innerText = name.value;
  // tableDisplay.appendChild(nameTd);

  //   console.log(nameText);
};
// // Listen for input
// document.getElementById('expenses-form').addEventListener('submit', function (e) {

//   const name = document.getElementById('name').value;
//   const price = document.getElementById('price').value;

//   getInputData(name, price);

//   e.preventDefault();

// })

// function getInputData(name, price) {
//   console.log(name, price);
//   const displayData = document.getElementById('table-display');
//   console.log(displayData);
//   // displayData.innerHTML = "<td id='new-td'>Test</td>";
//   // displayData.innerHTML = "<td id='new-td'>Test 2</td>";
//   let newItem = document.createElement('td');
//   // newItem.id = 'new-td';
//   // console.log(newItem);

//   displayData.appendChild(newItem);

//   console.log(addText);
//   return name, price
// }



// document.getElementById('expenses-form').addEventListener('submit', getInputData);

// function getInputData(e) {
//   const name = document.getElementById('name').value;
//   const price = document.getElementById('price').value;
//   // console.log(name);
//   // console.log(price)
//   e.preventDefault();
//   let inputData = [name, price];
//   // console.log(inputData);
//   return inputData
// }

// const data = getInputData;
// console.log(data);
// console.log(getInputData);



// export {
//   getInputData,
// };