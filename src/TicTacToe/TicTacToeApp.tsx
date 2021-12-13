import { TicTacToeBoard } from "./Components/Board";
import { checkAll } from "./Components/WinLogic";
import React, { Component } from "react";
import styled from "styled-components";

//STYLES
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
  border: 3px solid #fff;
  border-radius: 10px;
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
  background-color: #a01111;
  &:hover {
    cursor: pointer;
  }
`;

//CODE
export interface SquareData {
  value: string;
}

export enum OnTurn {
  X = "X",
  O = "O",
}

interface Props {
  resetGame: React.MouseEventHandler<HTMLButtonElement> | undefined;
  turn: string;
  squares: SquareData[];
  onClick: (number: any) => void;
}

export const BoardSize = 10;
const Squares = BoardSize ** 2;
export const ToWin = 5;

const app = (Comp: any) =>
  class AppComp extends Component<
    {},
    { turn: OnTurn; squares: SquareData[]; finish: boolean }
  > {
    createBoard = (): SquareData[] => {
      let squares = Array(Squares).fill({ value: null });
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

    nextPlayer = (): void => {
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

      this.setState((prevState) => ({
        turn: prevState.turn === OnTurn.X ? OnTurn.O : OnTurn.X,
      }));
    };

    hasValue = (id: number): boolean => {
      return this.state.squares[id].value !== null;
    };

    fieldIsFull = (): void => {
      let emptySquares = this.state.squares.filter(
        (sq) => sq.value !== null
      ).length;
      if (emptySquares === Squares) {
        alert("Game Over");
      }
    };

    onClick = (id: number): void => {
      if (this.hasValue(id)) return;

      if (this.state.finish) {
        return;
      }
      this.setState(
        (prevState) => ({
          squares: prevState.squares.map((square, index) =>
            id === index ? { ...square, value: prevState.turn } : square
          ),
        }),
        () => {
          this.nextPlayer();
        }
      );
    };

    resetGame = (): void => {
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

export const TTTApp = React.memo(
  app((props: Props) => {
    return (
      <DivWrapper>
        <style>{`body { background-color: #000;`}</style>
        <TicTacToeBoard squares={props.squares} onClick={props.onClick} />
        <Reset onClick={props.resetGame}>RESET GAME</Reset>
      </DivWrapper>
    );
  })
);
