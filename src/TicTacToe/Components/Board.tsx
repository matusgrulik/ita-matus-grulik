import { Square } from "./Square";
import { SquareData } from "../TicTacToeApp";
import React from "react";
import styled from "styled-components";

//STYLES
const DivMainWrapper = styled.div`
  flex-basis: 100%;
  margin-top: -25px;
`;

const DivWrapper = styled.div`
  margin: 50px auto;
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
`;

//CODE
interface BoardProps {
  squares: SquareData[];
  onClick: (number) => void;
}

export class TicTacToeBoard extends React.PureComponent<BoardProps, {}> {
  constructor(props: BoardProps) {
    super(props);
  }
  render() {
    return (
      <DivMainWrapper>
        <DivWrapper>
          {this.props.squares.map((square, index) => (
            <Square
              key={index}
              id={index}
              squareData={square}
              onClick={this.props.onClick}
            />
          ))}
        </DivWrapper>
      </DivMainWrapper>
    );
  }
}
