"use strict";

// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// const solution = function (address, n) {
//   const leftSolution = (address - 1) / 2;
//   const rightSolution = 2 * n - 2 * leftSolution;

//   return rightSolution;
// };

// console.log(solution(3, 5));

const solution = function (address, n) {
  return 2 * n + 1 - address;
};

console.log(solution(2, 5));
