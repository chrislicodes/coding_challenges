"use strict";

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const counter = {};

  //building counter object
  A.forEach((num) =>
    num in counter ? (counter[num] += 1) : (counter[num] = 1)
  );

  for (const [key, value] of Object.entries(counter)) {
    if (value % 2 === 1) {
      return +key;
    }
  }
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

//amazing solution:
// function findOdd(A) {
//   return A.reduce(function(c,v){return c^v;},0);
// }
