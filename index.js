/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Listen for submit
document.getElementById('expenses-form').addEventListener('submit', getInputData);

// Get Input data
function getInputData(e) {
  console.log('Testing');
  e.preventDefault();

  const name = document.getElementById('name');
  const price = document.getElementById('price');
  let tableDisplay = document.getElementById('table-display');

  // Create a for each

  let nameTd = document.createElement('td');
  let priceTd = document.createElement('td');
  tableDisplay.innerText = name.value;
  tableDisplay.innerText = price.value;
  tableDisplay.appendChild(nameTd, priceTd);

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