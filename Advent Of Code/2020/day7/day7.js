"use strict";

//Imports
const chalk = require("chalk");
const fs = require("fs");
const { performance } = require("perf_hooks");

//########################################

const filePath = "./testInput.txt";

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

const matrix = data.split(/\n/g); //.slice(0, 10);

const bagRules = {};
const goalRules = {};
const endNodes = {};

for (const rule of matrix) {
  const [key, ...content] = rule.match(/\w+\s\w+(?=\s+bag)/g);
  bagRules[key] = content;
}

for (const key of Object.keys(bagRules)) {
  if (bagRules[key].includes("shiny gold")) goalRules[key] = bagRules[key];
  if (bagRules[key].includes("no other")) endNodes[key] = bagRules[key];
}

// console.log(bagRules);
// console.log(goalRules);
// console.log(endNodes);

const unpackBag = function (bag, arr) {
  return arr[bag];
};

const unpackedArr = {};

for (const key of Object.keys(bagRules)) {
  //keeping track of the key
  const unpacked = [];
  bagRules[key].forEach((item, i) => {
    if (item === "shiny gold") {
      unpacked.push("shiny gold");
      return;
    }
    if (item === "no other") {
      unpacked.push("no other");
      return;
    }
    if (item in bagRules) {
      unpacked.push(bagRules[item]);
    } else {
      unpacked.push(item);
    }
  });

  unpackedArr[key] = unpacked.flat();
}
console.log(bagRules);
console.log(unpackedArr);

// ########################################

console.log(
  chalk.green("Part 1 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);

// ------> Part 2

t0 = performance.now();

//########################################

//Code

//########################################

console.log(
  chalk.green("Part 2 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);
