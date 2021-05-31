"use strict";

// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples

const reorganizeData = function (board) {
  try {
    const data = {};

    //1. Extract Columns (refactor pls)
    const columns = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
    };
    const subGrid = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
    };

    board.forEach((row, rowI) => {
      console.log(row);
      for (const i in row) {
        //don't know where this comes from during attempts
        if (i === "shuffle") break;
        //deal with the columns

        columns[i].push(row[i]);

        //2. Extract Sub Grids
        //-> we need an identifier for each grid
        let colInd = Math.floor(+i / 3);
        let rowInd = Math.floor(+rowI / 3);

        let subInd = +rowInd * 3 + +colInd;

        subGrid[subInd].push(row[i]);
      }
    });

    data["rows"] = board;
    data["columns"] = Object.values(columns);
    data["subgrid"] = Object.values(subGrid);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const validSolution = function (board) {
  try {
    //1. Check rows for zeros and validity
    let correctRow = "1,2,3,4,5,6,7,8,9";

    const data = reorganizeData(board);

    for (const item of Object.entries(data)) {
      const type = item[0];
      const data = item[1];

      console.log(`Checking ${type}...`);

      if (type === "rows") {
        for (const row of data) {
          if (row.includes(0)) {
            console.log("Error");
            return false;
          }
          if (row.sort().join(",") !== correctRow) {
            console.log("Error");
            return false;
          }
        }
      } else {
        for (const row of data) {
          if (row.sort().join(",") !== correctRow) {
            console.log("Error");
            return false;
          }
        }
      }
    }
    console.log("True");
    return true;
  } catch (error) {
    console.error(error);
  }
};

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]); // => false

validSolution([
  [8, 2, 6, 3, 4, 7, 5, 9, 1],
  [7, 3, 5, 8, 1, 9, 6, 4, 2],
  [1, 9, 4, 2, 6, 5, 8, 7, 3],
  [3, 1, 7, 5, 8, 4, 2, 6, 9],
  [6, 5, 9, 1, 7, 2, 4, 3, 8],
  [4, 8, 2, 9, 3, 6, 7, 1, 5],
  [9, 4, 8, 7, 5, 1, 3, 2, 6],
  [5, 6, 1, 4, 2, 3, 9, 8, 7],
  [2, 7, 3, 6, 9, 8, 1, 5, 4],
]);

//other solution

// function equals45(n) {
//   return n == 45;
// }

// function validSolution(board) {
//   var sumh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//   var sumv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//   osums = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ];
//   for (var i = 0; i < 9; i++) {
//     for (var j = 0; j < 9; j++) {
//       sumh[i] += board[i][j];
//       sumv[j] += board[i][j];
//       osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
//     }
//   }
//   for (var i = 0; i < 3; i++) if (!osums[i].every(equals45)) return false;
//   return sumh.every(equals45) && sumv.every(equals45);
// }
