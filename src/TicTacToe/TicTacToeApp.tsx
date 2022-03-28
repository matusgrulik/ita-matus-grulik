import { TicTacToeBoard } from "./Components/Board";
import { checkAll } from "./Components/WinLogic";
import { theme } from "./Theme";
import { useEffect, useRef, useState } from "react";
import React, { Component } from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  max-width: 880px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Reset = styled.button`
  text-align: center;
  margin: 0 20px 20px 20px;
  padding: 10px;
  border: 3px solid ${theme.primaryColor};
  border-radius: 10px;
  font-size: ${theme.fontSize};
  color: ${theme.primaryColor};
  background-color: ${theme.secondaryColor};
  &:hover {
    cursor: pointer;
  }
`;
export type ValueOf<T> = T[keyof T];

export type SquareData = {
  value: string | null;
};

export const onTurn = {
  X: "X",
  O: "O",
} as const;

export const BOARD_SIZE = 10;
const SQUARES = BOARD_SIZE ** 2;
export const TO_WIN = 5;
const getSquares = (size: number) =>
  Array.from({ length: size ** 2 }, () => ({ value: "" }));
export const TicTacToeApp = () => {
  const [turn, setTurn] = useState<ValueOf<typeof onTurn>>(onTurn.X);
  const [boardSquares, setBoardSquares] = useState(getSquares(BOARD_SIZE));
  const [gameOver, setGameOver] = useState(false);
  const cellClickHandler = (id: number) => {
    if (boardSquares[id].value !== "") return;
    if (gameOver === true) return;
    const newSquares = boardSquares.map((square, index) =>
      id === index ? { value: turn } : square
    );
    setBoardSquares((p) =>
      p.map((square, index) => (id === index ? { value: turn } : square))
    );
    const filledSquares = newSquares.filter((sq) => sq.value !== "").length;
    if (filledSquares === SQUARES)
      return alert("Game Over. Field is full"), setGameOver(true);
    const someoneWon = checkAll(turn, newSquares);
    if (someoneWon)
      alert(`Congratulations player ${turn}. You won`), setGameOver(true);
    const nextPlayer = turn === onTurn.X ? onTurn.O : onTurn.X;
    setTurn(nextPlayer);
  };
  const resetGame = () => {
    setBoardSquares(getSquares(BOARD_SIZE));
    setGameOver(false);
  };
  return (
    <DivWrapper>
      <TicTacToeBoard squares={boardSquares} onClick={cellClickHandler} />
      <Reset onClick={resetGame}>RESET GAME</Reset>
    </DivWrapper>
  );
};
