import { CardData } from "./PexesoApp";
import { themes } from "./Theme";
import styled from "styled-components";

const CardDiv = styled.div`
  flex-basis: calc(25% - 20px);
  height: 1.5em;
  border: 2px solid ${themes.primaryColor};
  border-radius: 5px;
  margin: 0.1em 0;
  cursor: pointer;
  background-color: ${themes.tertiaryColor};
  transition: 0.5s;
  text-align: ${themes.textAlign};
  font-size: 4.5em;

  &:hover {
    border: 5px solid ${themes.secondaryColor};
  }
`;

type CardProps = {
  card: CardData;
  selectCard: (id: number) => void;
};

export const Card = (props: CardProps) => (
  <CardDiv
    onClick={() => {
      props.selectCard(props.card.id);
    }}
  >
    {props.card.revealed || props.card.matched ? props.card.symbol.emoji : "❔"}
  </CardDiv>
);
