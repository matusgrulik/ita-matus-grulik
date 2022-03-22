import { BOARD_SIZE } from "../TicTacToeApp";
import { OnTurn } from "../TicTacToeApp";
import { SquareData } from "../TicTacToeApp";
import { TO_WIN } from "../TicTacToeApp";

/**
 * splitting the input array into an array of arrays of size ten
 */

const make2D = (squares: SquareData[]) => {
  let result: SquareData[][] = [];
  let tenElements: SquareData[] = [];
  squares.forEach((el, index) => {
    tenElements.push(el);
    if ((index + 1) % BOARD_SIZE === 0) {
      result.push(tenElements);
      tenElements = [];
    }
  });
  return result;
};

/**
 * checking if there is the same value n times (in our case 5 times) next to each other in rows without interruption
 */

const rows = (turn: OnTurn, board: SquareData[][]): boolean => {
  for (let row = 0; row < board.length; row++) {
    let count = 0;
    let winArray: number[][] = [];
    for (let col = 0; col < board.length; col++) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

/**
 * checking if there is the same value n times (in our case 5 times) next to each other in cols without interruption
 */

const columns = (turn: OnTurn, board: SquareData[][]): boolean => {
  for (let col = 0; col < board.length; col++) {
    let count = 0;
    let winArray: number[][] = [];
    for (let row = 0; row < board.length; row++) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

/**
 * checking if there is the same value n times (in our case 5 times) next to each other in the main diagonal (from left to right) without interruption
 */

const diagonal1 = (turn: OnTurn, board: SquareData[][]): boolean => {
  let count = 0;
  let length = board.length;
  let winArray: number[][] = [];
  let maxLength = length - TO_WIN + 1;
  for (let rowStart = 0; rowStart < maxLength; rowStart++) {
    for (
      let row = rowStart, col = 0;
      row < length && col < length;
      row++, col++
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === TO_WIN) {
        return true;
      }
    }
  }

  for (let colStart = 1; colStart < maxLength; colStart++) {
    for (
      let col = colStart, row = 0;
      col < length && row < length;
      col++, row++
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

/**
 * checking if there is the same value n times (in our case 5 times) next to each other in the secondary diagonal (from right to left) without interruption
 */

const diagonal2 = (turn: OnTurn, board: SquareData[][]): boolean => {
  let count = 0;
  let length = board.length;
  let maxLength = length - TO_WIN + 1;
  let winArray: number[][] = [];

  for (let rowStart = 0; rowStart < maxLength; rowStart++) {
    for (
      let row = rowStart, col = length - 1;
      row < length && col >= 0;
      row++, col--
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === TO_WIN) {
        return true;
      }
    }
  }
  for (let colStart = length - 2; colStart > TO_WIN - 2; colStart--) {
    for (
      let col = colStart, row = 0;
      col >= 0 && row <= length - 2;
      col-- && row++
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

export const checkAll = (turn: OnTurn, squares: SquareData[]): boolean => {
  let board = make2D(squares);
  return (
    rows(turn, board) ||
    columns(turn, board) ||
    diagonal1(turn, board) ||
    diagonal2(turn, board)
  );
};
