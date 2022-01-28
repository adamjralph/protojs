import { runProgram } from './index.js';
import { getInputData } from './index.js';
import { HTMLNameElementId } from './index.js';


// Test results output
function testResult(result) {
  if (result === 'pass') {
    console.log('\x1b[32m%s\x1b[0m', 'PASSED');  //green
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'FAILED');  //red
  }
}

// Test selector variables
function testSelectors(selector, expectedResult) {
  console.log(`Testing: ${selector} ...`)
  console.log(`Expecting: ${expectedResult}`)
  if (selector === expectedResult) {
    testResult('pass');
  } else {
    testResult('fail');
  }
}

/********************************************************************************************
* Test function calls
********************************************************************************************/

// Test that the array length is 2
// testGetInputDataLength();

// Test data types of input data
// document.getElementById('expenses-form').addEventListener('submit', testGetInputDataTypes);

// Test if two new <td> elements are created
testCreatedTdElements();


// Test if getInputData is of length 2
function testGetInputDataLength() {
  let data = getInputData().length;
  console.log('Testing length of inputData = 2...')
  console.log(`Array length = ${data}`)
  if (data === 2) {
    testResult('pass');
  } else {
    testResult('fail');
  }
};

// Test that data[0] is of type string 
// Test that data[1] is of type number
function testGetInputDataTypes() {

  console.log('Testing input data for type:');
  const data = getInputData();
  const dataIndex0 = typeof data[0];
  const dataIndex1 = typeof data[1];

  console.log(typeof data[1]);
  console.log(`data of index 0 = ${data[0]} - (${dataIndex0})`);
  if (dataIndex0 === 'string') {
    testResult('pass');
  } else {
    testResult('fail');
  }

  console.log(`data of index 1 = ${data[1]} - (${dataIndex1})`);
  if (typeof data[1] === 'number') {
    testResult('pass');
  } else {
    testResult('fail');
  }
}

// Test if two new <td> elements are created

function testCreatedTdElements() {
  const createdTd = HTMLNameElementId();
  let elementId = `display-${1}`
  const getTdId = document.getElementById(elementId);
  // console.log(createdTd);

  if (createdTd === getTdId) {
    testResult('pass');
  } else {
    testResult('fail');
  }
}

// testSelectors(name.id, 'name');
// testSelectors(price.id, 'price');

// Test inputs

// function testInputs(selector) {
//   console.log(`Testing Input: ${selector}`)
//   console.log('Expecting: Not Null')
//   console.log(selector);
//   if (selector != null) {
//     testResult('pass');
//   } else {
//     testResult('fail');
//   }
// }

// testInputs(name.id);
// testInputs(price.id);

// function testInputData(input,) {
//   const name = document.getElementById('name');
//   const price = document.getElementById('price');
//   console.log(name.value);
//   console.log(price.value);
//   return name.value
// }

// console.log(name.value);

// const inputData = getInputData;
// console.log(getInputData.inputData);
