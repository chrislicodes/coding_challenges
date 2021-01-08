"use strict";

// function sumStrings(a, b) {
//   return String(parseInt(a, 10) + parseInt(b, 10));
// }

function sumStrings(a, b) {
  let len;

  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");

  console.log(a, b);
  const aLen = a.length;
  const bLen = b.length;

  aLen > bLen ? (len = aLen) : (len = bLen);

  a = a
    .padStart(len, "0")
    .split("")
    .map((num) => +num)
    .reverse();
  b = b
    .padStart(len, "0")
    .split("")
    .map((num) => +num)
    .reverse();

  let overHang = [0];
  let sol = [];

  console.log(a, b);

  for (const i in a) {
    console.log(overHang);
    let step = a[i] + b[i] + overHang.pop();

    if (step > 9) {
      overHang.push(1);
      sol.push(String(step).slice(1));
    } else {
      overHang.push(0);
      sol.push(String(step));
    }
    console.log(step);
  }

  if (overHang.pop() === 1) sol.push(1);

  return sol.reverse().join("");
}
console.log(sumStrings("1234", "56789"));
