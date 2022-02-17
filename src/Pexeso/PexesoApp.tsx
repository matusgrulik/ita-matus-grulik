import { CardGrid } from "./Grid";
import { Helmet } from "react-helmet";
import { Newgame } from "./NewGame";
import { themes } from "./Theme";
import { useState } from "react";
import styled from "styled-components";

//STYLE//
const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 880px;
  margin: auto;
`;

const H1 = styled.h1`
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  font-size: 4em;
  color: ${themes.secondaryColor};
  font-family: ${themes.primaryFont};
  margin: 0 auto 0.2em auto;
`;

//CODE//

export interface CardData {
  symbol: CardSymbol;
  revealed: boolean;
  id: number;
  matched: boolean;
}

export interface CardSymbol {
  emoji: string;
}

const symbols = [
  { emoji: "🍋" },
  { emoji: "🍎" },
  { emoji: "🍊" },
  { emoji: "🍇" },
  { emoji: "🍓" },
  { emoji: "🍉" },
  { emoji: "🥝" },
  { emoji: "🍒" },
];

const shuffleArray = (a: any, b: any): number => 0.5 - Math.random();

const prepareCards = (): CardData[] => {
  return symbols
    .concat(symbols)
    .sort(shuffleArray)
    .map((symbol, index) => {
      return {
        symbol: symbol,
        revealed: false,
        id: index,
        matched: false,
      };
    });
};

export const PexesoApp = () => {
  const [cards, setCards] = useState(prepareCards());
  const [numberOfSelectedCards, setNumberOfSelectedCards] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  const NewGame = () => {
    setCards(prepareCards());
    setNumberOfSelectedCards(0);
    setMoves(0);
  };

  /**
   * inspiration for game logic:
   * https://github.com/Ronnehag/reactjs-memory-game/blob/master/src/components/GameBoard.js,
   * https://github.com/kurtpetrek/react-memory-game/blob/master/src/MemoryGame.js
   */
  const selectCard = (id: number) => {
    if (numberOfSelectedCards >= 2) return;

    setCards((prevState) => {
      const copy = prevState.map((card) =>
        card.id === id ? { ...card, revealed: true } : card
      );

      const revealed = copy.filter((card) => card.revealed);

      if (revealed.length === 2) {
        if (revealed[0].symbol === revealed[1].symbol) {
          matchCard(revealed[1].symbol);
        }

        setMoves((prevState) => prevState + 1);
        setTimeout(() => unselectAll(), 500);
      }

      return copy;
    });

    setNumberOfSelectedCards((prevState) => prevState + 1);
  };

  const matchCard = (symbol: CardSymbol) => {
    setCards((prevState) => {
      const copy = prevState.map((card) =>
        card.symbol === symbol ? { ...card, matched: true } : card
      );

      const allCardsMatch = copy.every((card) => card.matched);
      if (allCardsMatch) {
        setTimeout(() => NewGame(), 800);
      }

      return copy;
    });
  };

  const unselectAll = () => {
    setCards((prevState) => {
      return prevState.map((card) => ({ ...card, revealed: false }));
    });

    setNumberOfSelectedCards(0);
  };

  return (
    <DivWrapper>
      <Helmet>
        <style>{`body { background-color: ${themes.quaternaryColor}}`}</style>
      </Helmet>
      <H1>Pexeso</H1>
      <Newgame NewGame={NewGame} moves={moves} />
      <CardGrid cards={cards} selectCard={selectCard} />
    </DivWrapper>
  );
};
