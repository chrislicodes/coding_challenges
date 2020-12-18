"use strict";

const { performance } = require("perf_hooks");

const arr = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

//Recursive approach
const snail = function (array, unwrapped = []) {
  //catch the empty case
  if (array[0][0] === undefined) return array[0];

  //check the dimensions of the input arrays
  const m = array.length;
  const n = array[0].length;

  //base case .. one check would be enough ..
  if (m === 1 && n === 1) {
    unwrapped.push(array[0][0]);
    return unwrapped;
  }

  //1. Take the first row of the array
  unwrapped.push(...array.shift());

  //2. Take each last number of the still existing arrays
  array.forEach((row) => unwrapped.push(row.pop()));

  //3. Reverse the order of the arrays
  array.reverse();

  //4. Reverse the order of each array
  array.forEach((row) => row.reverse());

  //5. Repeat until there is just one item left
  return snail(array, unwrapped);
};

//While loop
const snailWhile = function (array) {
  let result;
  while (array.length) {
    //get the first row
    result = result ? result.concat(array.shift()) : array.shift();

    //get the right items
    array.forEach((row) => result.push(row.pop()));

    //get the bottom row
    result = result.concat((array.pop() || []).reverse());

    //get the left items
    array.forEach((row) => result.push(row.shift()));
  }

  return result;
};

let t0 = performance.now();

snailWhile([[]]); // []));
snailWhile([[1]]); //[1]));
snailWhile([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); //[1, 2, 3, 6, 9, 8, 7, 4, 5]));
snailWhile([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]); //[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16,11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]));
snailWhile([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

console.log("While Snail took", performance.now() - t0, "ms,");

t0 = performance.now();

snail([[]]); // []));
snail([[1]]); //[1]));
snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); //[1, 2, 3, 6, 9, 8, 7, 4, 5]));
snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]); //[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16,11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]));
snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, //14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

console.log("Recursive Snail took", performance.now() - t0, "ms,");
