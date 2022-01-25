import { heading, itemLabel } from './index.js';

function testResult(result) {
  if (result === 'pass') {
    console.log('\x1b[32m%s\x1b[0m', 'PASSED');  //green
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'FAILED');  //red
  }
}

function testSelectors(selector, expectedResult) {
  console.log(selector);
  console.log(`Testing: ${selector} ...`)
  console.log(`Expecting: ${expectedResult}`)
  if (selector === expectedResult) {
    let result = testResult('pass');
  } else {
    let result = testResult('fail');
  }
}

console.log(itemLabel.id);


testSelectors(heading.id, 'heading');
testSelectors(itemLabel.id, 'item');


