"use strict";

const nextBigger = function (num) {
  const n = String(num);
  const nLen = n.length;

  //if input empty or just one digit
  if (num === undefined || nLen === 1) return -1;

  //if there are two digits, check for possible switch
  if (nLen === 2) {
    console.log(+n[0], +n[1]);
    return +n[0] >= +n[1] ? -1 : +(n[1] + n[0]);
  }

  //if there are more than two digits
  const nCheck = n.split("").map((num) => +num);

  //if the last two digits can be switched, return this
  if (nCheck[nLen - 1] > nCheck[nLen - 2])
    return +(
      nCheck.slice(0, nLen - 2).join("") +
      nCheck[nLen - 1] +
      nCheck[nLen - 2]
    );

  //find the first digit-pair, which can be switched and then just sort the rest by size and concat
  nCheck.reverse();

  let numStack = [];
  let sol = [];

  for (const i in nCheck) {
    //if we can loop completely through the number, then they are all sorted already
    if (+i + 1 === nLen) return -1;

    let num1 = nCheck[i];
    let num2 = nCheck[+i + 1];

    if (num1 > num2) {
      numStack.push(num1);

      numStack.sort((a, b) => a - b);
      let biggerNum = numStack.splice(
        numStack.findIndex((num) => num > num2),
        1
      );
      numStack.push(num2);
      numStack.sort((a, b) => a - b);

      sol = sol.concat(n.slice(0, nLen - i - 2));
      sol.push(...biggerNum);
      sol = sol.concat(numStack);

      return +sol.join("");
    } else {
      numStack.push(num1);
    }
  }
};

console.log(nextBigger(32541)); //34125
console.log(nextBigger()); //0
console.log(nextBigger(21)); //0
console.log(nextBigger(9)); //0
console.log(nextBigger(12)); //21

console.log(nextBigger(111)); //0
console.log(nextBigger(531)); //0
console.log(nextBigger(144)); //414
console.log(nextBigger(414)); //441
console.log(nextBigger(513)); //531

console.log(nextBigger(4322)); //0
console.log(nextBigger(2017)); //2071

console.log(nextBigger(916661459494584)); //916661459494845
