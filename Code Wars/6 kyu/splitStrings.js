"use strict";

function solution(str) {
  if (str === "") return [];

  const regex = /.{1,2}/g; //match ever 2 or leftover characters

  const arr = str
    .match(regex)
    .map((pair) => (pair.length === 1 ? pair + "_" : pair));

  return arr;
}

console.log(solution("abc"));
