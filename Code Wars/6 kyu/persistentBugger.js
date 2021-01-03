"use strict";

const persistence = function (num) {
  let times = 0;
  let numStr = String(num);

  while (numStr.length !== 1) {
    const newSol = numStr
      .split("")
      .map((str) => str * 1)
      .reduce((acc, cum) => acc * cum, 1);

    numStr = String(newSol);
    times++;
  }

  return times;
};

console.log(persistence(999));
