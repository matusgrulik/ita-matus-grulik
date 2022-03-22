import { TicTacToeBoard } from "./Components/Board";
import { checkAll } from "./Components/WinLogic";
import { theme } from "./Theme";
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

export type SquareData = {
  value: string | null;
};

export enum OnTurn {
  X = "X",
  O = "O",
}

type Props = {
  resetGame: React.MouseEventHandler<HTMLButtonElement> | undefined;
  turn: string;
  squares: SquareData[];
  onClick: (number: number) => void;
};

export const BOARD_SIZE = 10;
const SQUARES = BOARD_SIZE ** 2;
export const TO_WIN = 5;

const app = (Comp: any) =>
  class AppComp extends Component<
    {},
    { turn: OnTurn; squares: SquareData[]; finish: boolean }
  > {
    createBoard = (): SquareData[] => {
      let squares = Array.from({ length: SQUARES }, () => ({ value: null }));
      return squares;
    };

    init = () => {
      return {
        turn: OnTurn.X,
        squares: this.createBoard(),
        finish: false,
      };
    };

    state = this.init();

    nextPlayer = () => {
      this.fieldIsFull();
      let someoneWon = checkAll(this.state.turn, this.state.squares);
      if (someoneWon) {
        this.setState(() => ({
          finish: true,
        }));
        alert(`
          Congratulations, player ${this.state.turn}. You won.
        `);
      }

      this.setState((p) => ({
        turn: p.turn === OnTurn.X ? OnTurn.O : OnTurn.X,
      }));
    };

    hasValue = (id: number): boolean => {
      return this.state.squares[id].value !== null;
    };

    fieldIsFull = () => {
      let emptySquares = this.state.squares.filter(
        (sq) => sq.value !== null
      ).length;
      if (emptySquares === SQUARES) {
        alert("Game Over");
      }
    };

    onClick = (id: number) => {
      if (this.hasValue(id)) return;

      if (this.state.finish) {
        return;
      }
      this.setState(
        (p) => ({
          squares: p.squares.map((square, index) =>
            id === index ? { ...square, value: p.turn } : square
          ),
        }),
        () => this.nextPlayer()
      );
    };

    resetGame = () => {
      this.setState(this.init());
    };

    render() {
      return (
        <Comp
          resetGame={this.resetGame}
          onClick={this.onClick}
          turn={this.state.turn}
          squares={this.state.squares}
        />
      );
    }
  };

export const TTTApp = app((props: Props) => {
  return (
    <DivWrapper>
      <TicTacToeBoard squares={props.squares} onClick={props.onClick} />
      <Reset onClick={props.resetGame}>RESET GAME</Reset>
    </DivWrapper>
  );
});
