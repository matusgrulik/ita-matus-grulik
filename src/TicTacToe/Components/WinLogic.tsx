import { BoardSize } from "../TicTacToeApp";
import { OnTurn } from "../TicTacToeApp";
import { SquareData } from "../TicTacToeApp";
import { ToWin } from "../TicTacToeApp";

const make2D = (squares: SquareData[]): any => {
  let result: SquareData[][] = [];
  let tenElements: SquareData[] = [];
  squares.forEach((el, index) => {
    tenElements.push(el);
    if ((index + 1) % BoardSize === 0) {
      result.push(tenElements);
      tenElements = [];
    }
  });
  return result;
};

const Rows = (turn: OnTurn, board: SquareData[][]): boolean => {
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
      if (count === ToWin) {
        return true;
      }
    }
  }
  return false;
};

const Cols = (turn: OnTurn, board: SquareData[][]): boolean => {
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
      if (count === ToWin) {
        return true;
      }
    }
  }
  return false;
};

const Diag1 = (turn: OnTurn, board: SquareData[][]): boolean => {
  let count = 0;
  let length = board.length;
  let winArray: number[][] = [];
  let maxLength = length - ToWin + 1;
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
      if (count === ToWin) {
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
      if (count === ToWin) {
        return true;
      }
    }
  }
  return false;
};

const Diag2 = (turn: OnTurn, board: SquareData[][]): boolean => {
  let count = 0;
  let length = board.length;
  let maxLength = length - ToWin + 1;
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
      if (count === ToWin) {
        return true;
      }
    }
  }
  for (let colStart = length - 2; colStart > ToWin - 2; colStart--) {
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
      if (count === ToWin) {
        return true;
      }
    }
  }
  return false;
};

export const checkAll = (turn: OnTurn, squares: SquareData[]): boolean => {
  let board = make2D(squares);
  return (
    Rows(turn, board) ||
    Cols(turn, board) ||
    Diag1(turn, board) ||
    Diag2(turn, board)
  );
};
