import { Card } from "./Card";
import { CardData } from "./PexesoApp";
import styled from "styled-components";

const DivCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto auto 0.5em auto;
  justify-content: space-around;
  padding: 0 0.2em;
  max-width: 650px;
`;

type CardGridProps = {
  cards: CardData[];
  selectCard: (id: number) => void;
};

export const CardGrid = (props: CardGridProps) => (
  <DivCardGrid>
    {props.cards.map((card, index) => (
      <Card key={index} card={card} selectCard={props.selectCard} />
    ))}
  </DivCardGrid>
);
