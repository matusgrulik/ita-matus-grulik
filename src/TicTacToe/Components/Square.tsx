import { SquareData } from "../TicTacToeApp";
import { theme } from "../Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  border: 2px solid ${theme.primaryColor};
  color: ${theme.primaryColor};
  width: 50px;
  height: 50px;
  text-align: ${theme.textAlign};
  font-size: ${theme.fontSize};

  @media (max-width: 570px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: 522px) {
    width: 42px;
    height: 42px;
  }
  @media (max-width: 500px) {
    widht: 35px;
    height: 35px;
  }
`;

type SquareProps = {
  squareData: SquareData;
  id: number;
  onClick: (number: number) => void;
};

export const Square = (props: SquareProps) => (
  <DivWrapper onClick={() => props.onClick(props.id)}>
    {props.squareData.value}
  </DivWrapper>
);
