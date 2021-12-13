import { SquareData } from "../TicTacToeApp";
import React from "react";
import styled from "styled-components";

//STYLES
const DivWrapper = styled.div`
  border: 2px solid #fff;
  background-color: #000;
  color: #fff;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 2rem;
`;

//CODE
interface SquareProps {
  squareData: SquareData;
  id: number;
  onClick: (number) => void;
}

export class Square extends React.Component<SquareProps, {}> {
  onClick = (event: React.FormEvent<HTMLDivElement>) => {
    this.props.onClick(this.props.id);
  };
  render() {
    return (
      <DivWrapper onClick={(event) => this.onClick(event)}>
        {this.props.squareData.value}
      </DivWrapper>
    );
  }
}
