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

const matrix = data.split(/\n/g); //.slice(0, 10);

//Init array for all the rules
const bagRules = {};

//create all the rules
for (const rule of matrix) {
  const [key, ...content] = rule.match(/\w+\s\w+(?=\s+bag)/g);
  bagRules[key] = content;
}

//keep track of what to search for
const searchStack = ["shiny gold"];
const solutions = {};

//function to check the stack and search for possible solutions beginning from the end
const unpackBags = function (rules, searchColor) {
  // console.log(
  // chalk.bgBlue(
  // `--> New Round, searching for ${searchColor}. Current Search - Stack: ${searchStack}`
  // )
  // );

  //for each bag rule we take all the bags inside that rule
  for (const [keyColor, bagColors] of Object.entries(rules)) {
    // console.log(
    // `Searching for ${searchColor} in ${keyColor} with ${bagColors} ${bagColors.includes(
    // searchColor
    // )}`
    // );
    //and check whether this set of bags includes our desired color
    if (
      bagColors.includes(searchColor) &&
      !Object.keys(solutions).includes(keyColor)
    ) {
      //if it contains our desired color, then we will first accept it as possible answer
      // console.log(chalk.green(`Adding ${keyColor} to the solutions.`));
      solutions[keyColor] = true;
      // console.log("New solutions:", solutions);
      //and also add the color to the stack, so that we can search backwards for more occurrences
      // console.log(chalk.red("Pushing", keyColor, "to searchStack."));
      searchStack.push(keyColor);
    } else {
      // console.log(chalk.grey("Nothing to do .."));
    }
  }

  if (searchStack.length > 0) unpackBags(rules, searchStack.pop());
};

unpackBags(bagRules, searchStack.pop());

console.log(Object.keys(solutions).length); //172

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
