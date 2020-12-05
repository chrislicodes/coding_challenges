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

const checkLenPolicy = function (data, part) {
  let correct = 0;

  const dataArr = data.split(/\r?\n/);

  dataArr.forEach((line) => {
    try {
      const data = line.split(" ");
      const [min, max] = data[0].split("-");
      const letter = data[1][0];
      const password = data[2];

      if (part === 1) {
        //check occurrence of the letter
        const re = new RegExp(letter, "g");

        const lineLen = (password.match(re) || []).length;

        if (lineLen >= +min && lineLen <= +max) correct += 1;
      } else {
        //get the position of the letter
        const lowerPos = password.slice(+min - 1, +min);
        const upperPos = password.slice(+max - 1, +max);

        //check if occurrence is unique
        const check =
          (lowerPos === letter && upperPos !== letter) ||
          (lowerPos !== letter && upperPos === letter);

        if (check) correct += 1;
      }
    } catch (errLoop) {
      console.log(chalk.bgRed(errLoop));
    }
  });
  console.log("Correct passwords in database:", correct);
};

checkLenPolicy(data, 1); //600

//########################################

console.log(
  chalk.green("Part 1 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);

// ------> Part 2

t0 = performance.now();

//########################################

checkLenPolicy(data, 2); //245

//########################################

console.log(
  chalk.green("Part 2 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);
