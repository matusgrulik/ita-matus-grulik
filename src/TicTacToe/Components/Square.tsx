import { SquareData } from "../TicTacToeApp";
import { theme } from "../Theme";
import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  border: 2px solid ${theme.primaryColor};
  color: ${theme.primaryColor};
  width: 50px;
  height: 50px;
  text-align: ${theme.textAlign};
  font-size: ${theme.fontSize};
`;

type SquareProps = {
  squareData: SquareData;
  id: number;
  onClick: (number: number) => void;
};

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
