import { SquareData } from "../TicTacToeApp";
import { theme } from "../Theme";
import styled from "styled-components";

const DivWrapper = styled.div`
  border: 2px solid ${theme.primaryColor};
  color: ${theme.primaryColor};
  width: 1.2em;
  height: 1.2em;
  text-align: ${theme.textAlign};
  font-size: ${theme.fontSize};
  @media (max-width: 573px) {
    width: 1.1em;
    height: 1.1em;
  }
  @media (max-width: 512px) {
    width: 0.9em;
    height: 0.9em;
  }
  @media (max-width: 499px) {
    width: 0.65em;
    height: 0.65em;s
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
