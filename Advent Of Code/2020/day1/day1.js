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

// ------> Part 1

let t0 = performance.now();

//########################################

//Split the data and transform strings to numbers
const arr = data.split(/\n/g).map((str) => str * 1);

const findTwoNumbers = function (arr, num) {
  //find the complement to num in the arrays
  for (const iter of arr) {
    if (arr.includes(num - iter)) {
      console.log(num - iter, iter, num, "Solution:", (num - iter) * iter);
      // return;
    }
  }
};

findTwoNumbers(arr, 2020); //316 1704 538464

//########################################

console.log(
  chalk.green("Part 1 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);

// ------> Part 2

t0 = performance.now();

//########################################

const findThreeNumbers = function (arr, num) {
  for (const item1 of arr) {
    //item + b + c = num -> b + c = num - item
    // b + c = newNum = num - item1
    const newNum = num - item1;

    //filter all items bigger than the newNum
    const newArr = arr.filter((i) => i < newNum);

    for (const item2 of newArr) {
      //comp = newNum - item2 /// comp = num - item1 - item2
      const comp = newNum - item2;

      //Check again if the complement exists
      if (newArr.includes(comp)) {
        console.log(
          item1,
          item2,
          comp,
          item1 + item2 + comp,
          "Solution:",
          item1 * item2 * comp
        );
        // return;
      }
    }
  }
};

findThreeNumbers(arr, 2020); //615 + 903 + 502 = 2020, * = 278783190

//########################################

console.log(
  chalk.green("Part 2 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);
