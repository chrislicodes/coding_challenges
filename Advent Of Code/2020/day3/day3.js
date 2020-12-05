"use strict";

//Imports
const chalk = require("chalk");
const fs = require("fs");
const { performance } = require("perf_hooks");

//########################################

const filePath = "./input.txt";

//########################################

//Load Data
const data = fs
  .readFileSync(filePath, (err, data) => {
    if (err) console.log(chalk.bgRed(err));
  })
  .toString();

// ------> Part 1 + Part 2

let t0 = performance.now();

//########################################

const arr = data.split(/\n/g);
let steps = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const countTrees = function (matrix, step, skip = 1) {
  //get edge of frame
  const maxLength = matrix[0].length;
  let position = 0;
  let trees = 0;

  for (const line in matrix) {
    //don't count trees on the first line but execute the first step
    if (+line === 0) {
      position += step;
    } else {
      //check for skip size
      if (line % skip != 0) continue;

      //if there is a tree on the current step, add one tree
      if (matrix[+line][position] === "#") {
        trees += 1;
      }

      //check if the next step would go over the edge of the frame, if so reset position to beginning
      if (position + step > maxLength - 1) {
        position = position + step - maxLength;
      } else {
        position += step;
      }
    }
  }

  console.log("Steps:", step, "Skip", skip, "Trees:", trees);

  return trees;
};

const results = []; //103, 151, 83, 99, 59

//Execute function for all step and skip sizes
steps.forEach((step) => {
  results.push(countTrees(arr, step[0], step[1]));
});

//Print solution for part 2
console.log(
  "Solution:",
  results.reduce((acc, cum) => acc * cum) //7540141059
);
//########################################

console.log(
  chalk.green(
    "Part 1 + 2 took",
    ((performance.now() - t0) / 1000).toFixed(4),
    "s."
  )
);
