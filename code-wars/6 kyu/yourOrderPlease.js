"use strict";

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const order = function (words) {
  if (words === "") return "";

  const wordArr = words.split(" ");
  const posArr = wordArr.map((word) => {
    return word.match(/\d+/);
  });

  const sortedArr = [];

  for (let i in posArr) {
    sortedArr.push(posArr.find((row) => +row[0] === +i + 1).input);
  }

  return sortedArr.join(" ");
};

let test = order("is2 Thi1s T4est 3a");

//Better solution - learned: remember that we can add full functions into the sort method

// function order(words){

//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }
