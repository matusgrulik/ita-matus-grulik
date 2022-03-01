import { JokeType } from "./RandomJokes";
import { OneJoke } from "./OneJoke";
import { URL_CATEGORY } from "./Config";
import { removeDuplicate } from "./ArrayUtils";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import loadingGIF from "./Spinner-1.9s-204px.svg";
import styled from "styled-components";

//STYLE//

const H3 = styled.h3`
  text-align: ${themes.textAlign};
  text-transform: ${themes.textTransform};
  color: ${themes.secondaryColor};
  font-family: ${themes.secondaryFont};
`;

const Li = styled.li`
  list-style: none;
  margin: 1.5em;
  font-family: ${themes.secondaryFont};
`;

const DivError = styled.div`
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 3em;
  text-transform: ${themes.textTransform};
`;

const DivLoading = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;

//CODE//

const NUMBER_OF_CATEGORY_JOKES = 5;
const NUMBER_OF_ATTEMPTS = 20;

export const CategoryJoke = (props: { category: string }) => {
  const [categoryJokes, setCategoryJokes] = useState<JokeType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCatJokes = async () => {
      const jokesArray: JokeType[] = [];
      let counter = 0;
      try {
        while (jokesArray.length < NUMBER_OF_CATEGORY_JOKES) {
          setLoading(true);
          counter++;
          const response = await fetch(URL_CATEGORY + props.category);
          const data: JokeType = await response.json();
          jokesArray.push(data);
          const isDuplicate = removeDuplicate(jokesArray);
          if (counter > NUMBER_OF_ATTEMPTS) {
            return;
          }
          setCategoryJokes(isDuplicate);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCatJokes();
  }, []);

  return (
    <div>
      <H3>{props.category} jokes</H3>
      {loading && (
        <DivLoading>
          <img src={loadingGIF} alt="Loading" />
        </DivLoading>
      )}

      {error ? (
        <DivError>
          Unable to get data from ${URL_CATEGORY + props.category}
        </DivError>
      ) : (
        ""
      )}

      <ul>
        {categoryJokes.map((joke) => (
          <Li key={joke.id}>
            <OneJoke value={joke.value} />
          </Li>
        ))}
      </ul>
    </div>
  );
};
