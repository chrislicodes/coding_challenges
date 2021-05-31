"use strict";

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

//we want the points in order
//there can be points on the same coordinate
function dblLinear(n) {
  console.log(n);
  //keeping track of current iteration
  let u = [1]; //sequence
  let yi = 0; //y iteration
  let zi = 0; //z iteration

  //loop until number u at position n is calculated
  while (true) {
    if (u.length - 1 === n) break;
    //y(u[yi])
    let nextIterY = 2 * u[yi] + 1;

    //z(u[zi])
    let nextIterZ = 3 * u[zi] + 1;

    if (nextIterY > nextIterZ) {
      //if the y value is bigger than z, then we will push the smaller value - z and we can calculate the next z value in the sequence
      //we will only push it if the value doesn't already exists
      u.push(nextIterZ);
      zi++;
    } else {
      //if the y value is NOT bigger than z, then we will push the smaller value which is y and we can calculate the next y value in the sequence
      if (nextIterY === nextIterZ) {
        yi++;
      } else {
        u.push(nextIterY);
        yi++;
      }
    }
  }

  console.dir(u, { maxArrayLength: null });

  return u[n];
}

dblLinear(100);
