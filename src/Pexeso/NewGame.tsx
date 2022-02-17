import { themes } from "./Theme";
import styled from "styled-components";

//STYLE//
const DivWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.7em;
  background-color: ${themes.tertiaryColor};
  border-radius: 5px;
  font-family: ${themes.secondaryFont};
  color: ${themes.primaryColor};
  width: 180px;
  margin: 0.5em auto;

  &:hover {
    border: 2px solid ${themes.primaryColor};
    background-color: ${themes.secondaryColor};
    cursor: pointer;
  }
`;

const H4 = styled.h4`
  text-align: ${themes.textAlign};
  padding: 5px;
  color: ${themes.secondaryColor};
  font-family: ${themes.secondaryFont};
  margin: 0.5em auto;
  flex-basis: 100%;
`;

//CODE//

interface NewGameProps {
  NewGame: () => void;
  moves: number;
}

export const Newgame = (props: NewGameProps) => {
  return (
    <DivWrapper>
      <Button onClick={props.NewGame}>New game</Button>
      <H4>Moves: {props.moves} </H4>
    </DivWrapper>
  );
};
