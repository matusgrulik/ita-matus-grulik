import { Square } from "./Square";
import { SquareData } from "../TicTacToeApp";
import styled from "styled-components";

const DivMainWrapper = styled.div`
  flex-basis: 100%;
  margin-top: -25px;
`;

const DivWrapper = styled.div`
  margin: 50px auto;
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

type BoardProps = {
  squares: SquareData[];
  onClick: (number: number) => void;
};

export const TicTacToeBoard = (props: BoardProps) => (
  <DivMainWrapper>
    <DivWrapper>
      {props.squares.map((square, index) => (
        <Square
          key={index}
          id={index}
          squareData={square}
          onClick={props.onClick}
        />
      ))}
    </DivWrapper>
  </DivMainWrapper>
);
