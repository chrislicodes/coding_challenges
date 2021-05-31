"use strict";

function duplicateCount(text) {
  let counter = {};

  let arr = text.split("");

  for (let char of arr) {
    char = char.toLowerCase();
    if (char in counter) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }

  let doubleChars = 0;

  for (const count of Object.values(counter)) {
    if (count > 1) {
      doubleChars++;
    }
  }
  return doubleChars;
}

duplicateCount("aabbcde");
