/*function foo(func) {
    // What to do here?
    func();
  }
  
  function bar() {
    console.log('Hello, I am bar!');
  }
  
  foo(bar);*/

  /*function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var result = startIndex(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(result);
}
threeFive(startIndex);
//threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,12.14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding*/
'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  // const numbers = [];
  // for (let number = startIndex; number <= stopIndex; number++) {
  //   numbers.push(number);
  //   if (number % 3 === 0) {
  //     sayThree(number);
  //   }
  //   if (number % 5 === 0) {
  //     sayFive(number);
  //   }
  // }
 

//   console.log(numbers);
// }

// function sayThree(number) {
//   console.log(sayThree);
// }

// function sayFive(number) {
//   console.log(sayFive);
// }

// threeFive(10, 15, sayThree, sayFive);

// // Do not change or remove anything below this line
// module.exports = threeFive;}

'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
    if (i === num) {
      return result;
    }
  }
  return result;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  while (num > 0) {
    result += str;
    num--;
  }

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  do {
    result += str;
    num--;
  } while (num > 0);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));


// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
}};