"use strict";

const squareDigits = function (num) {
  const string = String(num)
    .split("")
    .map((num) => num ** 2);

  return string.join("") * 1;
};

squareDigits(9119);
