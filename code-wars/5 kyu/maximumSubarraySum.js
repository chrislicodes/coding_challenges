"use strict";

const findMax = function (arr) {
  return arr.reduce((acc, cum) => (acc > cum ? acc : cum));
};

const maxSequence = function (arr) {
  const arrLen = arr.length;

  //check if empty
  if (arrLen === 0) return 0;

  //check if all negative
  if (arr.filter((num) => num < 0) === arrLen) return 0;

  //check if all positive
  if (arr.filter((num) => num >= 0) === arrLen)
    return arr.reduce((acc, cum) => acc + cum);

  let bestSum = 0;
  let curSum = 0;

  for (const num of arr) {
    //compare if it is better to begin newly with the following number or if its better to add them up
    curSum = findMax([num, curSum + num]);
    bestSum = findMax([bestSum, curSum]);
  }

  return bestSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
