"use strict";

// TODO: Refactor this please

const solution = function (list) {
  let lowest = list[0];
  let lowestIndex = 0;

  let biggest = list[0];
  let sol = [];

  for (const i in list) {
    let curItem = list[i];
    let nextItem = list[+i + 1];

    if (curItem + 1 === nextItem) {
      biggest = nextItem;
    } else {
      let difference = biggest - lowest;

      if (difference > 1) {
        sol.push(`${lowest}-${biggest}`);
      } else {
        sol = sol.concat(list.slice(lowestIndex, +i + 1));
      }
      lowest = biggest = list[+i + 1];
      lowestIndex = +i + 1;
    }
  }
  return sol.join(",");
};

//prettier-ignore
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
