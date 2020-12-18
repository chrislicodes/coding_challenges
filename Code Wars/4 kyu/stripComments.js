"use strict";

// matchAll not available on codeWars

// const solution = function (input, markers) {

//   const regex = new RegExp("^(.*?)[#!\n]", "gm");

//   const match = [...input.matchAll(regex)];

//   return match.map((item) => item[1].trim()).join("\n");

// };

const solution = function (input, markers) {
  //get everything up to one of the markers
  const regex = new RegExp(`^(.*?)[${markers.join("")}]`);

  //workaround for matchAll
  const sol = input.split("\n").map((item) => {
    return item.match(regex) ? item.match(regex)[1].trim() : item;
  });

  return sol.join("\n");
};

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
); //, "apples, plums\npears\noranges")
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); //, "Q\nu\ne")
