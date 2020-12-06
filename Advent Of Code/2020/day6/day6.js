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

//Questions a - z
//Find any question in your group for which atleast 1 person answered yes
//Every answer just counts one
//the input is a list of questions, that the several groups answered with yes

const answerArr = data.split(/\n{2,}/g);

let answers = 0;

answerArr.forEach((answerGroup) => {
  const groupAnswers = answerGroup.replace(/\n/g, " ").split(" ");
  const answerJoin = groupAnswers.join("");
  const uniqueLetters = new Set(answerJoin);
  answers += uniqueLetters.size;
});

console.log("Answers:", answers);
//########################################

console.log(
  chalk.green("Part 1 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);

// ------> Part 2

t0 = performance.now();

//########################################

answers = 0;

answerArr.forEach((answerGroup) => {
  const groupAnswers = answerGroup.replace(/\n/g, " ").split(" ");
  const membersInGroup = groupAnswers.length;

  const answerJoin = groupAnswers.join("");
  const uniqueLetters = new Set(answerJoin);

  for (const letter of uniqueLetters) {
    const re = new RegExp(letter, "g");
    const lineLen = (answerJoin.match(re) || []).length;

    if (lineLen === membersInGroup) answers++;
  }
});

console.log(answers);

//########################################

console.log(
  chalk.green("Part 2 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);
