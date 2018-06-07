/*
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
*/

function validSolution(board){
  var check = []

  // Check rows
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (board[row][col] == 0) {
        return false
      } else {
        check.push(board[row][col])
      }
    }
    if ([...new Set(check)].length != 9) return false
    check = []
  }

  // Check columns
  for (var col = 0; col < 9; col++) {
    for (var row = 0; row < 9; row++) {
      if (board[row][col] == 0) {
        return false
      } else {
        check.push(board[row][col])
      }
    }
    if ([...new Set(check)].length != 9) return false
    check = []
  }

  // Check blocks
  for (var block = 0; block < 9; block++) {
    for (var row = (block % 3) * 3; row < ((block % 3) * 3) + 3; row++) {
      for (var col = Math.floor(block / 3) * 3; col < (Math.floor(block / 3) * 3) + 3; col++) {
        if (board[row][col] == 0) {
          return false
        } else {
          check.push(board[row][col])
        }
      }
    }
    if ([...new Set(check)].length != 9) return false
    check = []
  }

  return true
}
