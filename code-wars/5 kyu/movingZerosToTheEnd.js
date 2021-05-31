"use strict";

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = function (arr) {
  let counter = 0;

  const arrFilter = arr.filter((item) => {
    if (item === 0) {
      counter++;
      return false;
    }
    return true;
  });

  return arrFilter.concat([...Array(counter)].map((item) => 0));
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
