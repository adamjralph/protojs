/* PROTOJS
* A prototype expense tracking app
* By Adam Ralph */

// Test 
let val;


// Listen for input
document.getElementById('expenses-form').addEventListener('submit', function (e) {

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

  getInputData(name, price);

  e.preventDefault();

})

function getInputData(name, price) {
  console.log(name, price);
  const displayData = document.getElementById('table-display');
  console.log(displayData);
  displayData.appendChild.innerHTML = "<td id='new-td'>Test</td>";
  // displayData.innerHTML = "<td id='new-td'>Test 2</td>";
  return name, price
}



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