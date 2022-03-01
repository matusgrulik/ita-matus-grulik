import { OneJoke } from "./OneJoke";
import { URL_RANDOM } from "./Config";
import { removeDuplicate } from "./ArrayUtils";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import loadingGIF from "./Spinner-1.9s-204px.svg";
import styled from "styled-components";

//STYLE//
const DivLoading = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;

const Li = styled.li`
  margin: 1.5em 1em;
  font-size: 1em;
  font-family: ${themes.secondaryFont};
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
const DivError = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 2em;
  text-transform: ${themes.textTransform};
`;

//CODE//

const NUMBER_OF_JOKES = 20;

export type JokeType = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export const RandomJokes = () => {
  const [jokes, setJokes] = useState<JokeType[]>([]);
  const [error, setError] = useState(false);
  const [loadingJokes, setLoadingJokes] = useState(false);

  useEffect(() => {
    const getJokes = async () => {
      const jokesArray: JokeType[] = [];
      try {
        while (jokesArray.length < NUMBER_OF_JOKES) {
          setLoadingJokes(true);
          const response = await fetch(URL_RANDOM);
          const data: JokeType = await response.json();
          jokesArray.push(data);
          const isDuplicate = removeDuplicate(jokesArray);
          setJokes(isDuplicate);
        }
      } catch {
        setError(true);
      } finally {
        setLoadingJokes(false);
      }
    };
    getJokes();
  }, []);

  return (
    <div>
      {loadingJokes && (
        <DivLoading>
          <img src={loadingGIF} alt="Loading" />
        </DivLoading>
      )}

      {error ? (
        <DivError> Unable to get data from ${URL_RANDOM} </DivError>
      ) : null}

      <Ul>
        {jokes.map((joke) => (
          <Li key={joke.id}>
            <OneJoke value={joke.value} />
          </Li>
        ))}
      </Ul>
    </div>
  );
};
