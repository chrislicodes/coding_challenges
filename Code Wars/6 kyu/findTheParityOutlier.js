"use strict";
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  const evenLen = integers.filter((x) => x % 2 == 0);
  if (evenLen.length === 1) {
    return evenLen[0];
  } else {
    return integers.find((num) => Math.abs(num) % 2 === 1);
  }
}

console.log(findOutlier([2, 6, 8, 10, 3]));
