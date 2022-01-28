import { runProgram } from './index.js';

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
