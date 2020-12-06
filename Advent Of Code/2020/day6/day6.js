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

const evaluateAnswers = function (arr, version) {
  let answers = 0;

  arr.forEach((answerGroup) => {
    const groupAnswers = answerGroup.replace(/\n/g, " ").split(" ");
    const answerJoin = groupAnswers.join("");
    const uniqueLetters = new Set(answerJoin);
    const membersInGroup = groupAnswers.length;

    if (version === 1) {
      answers += uniqueLetters.size;
    } else if (version === 2) {
      for (const letter of uniqueLetters) {
        const re = new RegExp(letter, "g");
        const lineLen = (answerJoin.match(re) || []).length;

        if (lineLen === membersInGroup) answers++;
      }
    }
  });

  console.log("Version:", version, "Answers:", answers);
};

evaluateAnswers(answerArr, 1); //6532

//########################################

console.log(
  chalk.green("Part 1 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);

// ------> Part 2

t0 = performance.now();

//########################################

evaluateAnswers(answerArr, 2); //3427

//########################################

console.log(
  chalk.green("Part 2 took", ((performance.now() - t0) / 1000).toFixed(4), "s.")
);
