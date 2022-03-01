import { CategoryJoke } from "./CategoryJoke";
import { Helmet } from "react-helmet";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RandomJokes } from "./RandomJokes";
import { URL_ALL_CATEGORIES, URL_BASE } from "./Config";
import { themes } from "./Theme";
import { useEffect, useState } from "react";
import loadingGIF from "./Spinner-1.9s-204px.svg";
import styled from "styled-components";

//STYLE//
const DivWrapper = styled.div`
  margin: auto;
  max-width: 880px;
`;

const H1 = styled.h1`
  text-align: ${themes.textAlign};
  font-family: ${themes.primaryFont};
  color: ${themes.secondaryColor};
  text-transform: ${themes.textTransform};
  font-size: 3em;
  margin-top: 2em;
`;

const DivError = styled.div`
  color: ${themes.secondaryColor};
  font-family: ${themes.secondaryFont};
  font-weight: ${themes.fontBold};
  text-align: ${themes.textAlign};
  margin: 3em;
  text-transform: ${themes.textTransform};
  font-size: 2em;
`;

const LinkRandom = styled(Link)`
  text-decoration: ${themes.textDecoration};
  color: ${themes.secondaryColor};
  font-weight: ${themes.fontBold};
  font-family: ${themes.secondaryFont};
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${themes.primaryColor};
  }
`;

const DivRandomJokes = styled.div`
  list-style: none;
  margin: 0.5em auto;
  width: 180px;
  padding: 0.5em;
  font-size: 1.5em;
  border: 1px solid ${themes.secondaryColor};
  border-radius: 5px;
`;

const LinkCategory = styled(Link)`
  text-decoration: ${themes.textDecoration};
  color: ${themes.secondaryColor};
  font-family: ${themes.secondaryFont};
  padding: 0.5em;
  width: 100%;
  text-align: center;

  &:hover {
    color: ${themes.primaryColor};
    font-weight: ${themes.fontBold};
  }
`;

const Li = styled.li`
  list-style: none;
  margin: 0.2em;
  border: 1px solid ${themes.secondaryColor};
  border-radius: 5px;
  display: flex;
  min-width: 110px;
  font-family: ${themes.secondaryFont};
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 0;
`;

const DivLoading = styled.div`
  position: relative;
  left: calc(50% - 100px);
`;

//CODE//

export const ChuckNorrisApp = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL_ALL_CATEGORIES);
        const data: string[] = await response.json();
        setCategories(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  return (
    <DivWrapper>
      <Helmet>
        <style>{`body { background-color: ${themes.tertiaryColor}}`}</style>
      </Helmet>

      <H1>Chuck Norris Jokes</H1>
      <Router>
        {loading && (
          <DivLoading>
            <img src={loadingGIF} alt="Loading" />
          </DivLoading>
        )}
        {error ? (
          <DivError> Unable to get data from ${URL_ALL_CATEGORIES} </DivError>
        ) : null}

        <DivRandomJokes>
          <LinkRandom to={"/RandomJokes"}>Random jokes</LinkRandom>
        </DivRandomJokes>

        <Ul>
          {categories.map((category) => {
            return (
              <Li key={category}>
                <LinkCategory to={URL_BASE + category}>{category}</LinkCategory>
              </Li>
            );
          })}
        </Ul>

        <Switch>
          <Route path={"/RandomJokes"}>
            <RandomJokes />
          </Route>
          {categories.map((category, index) => (
            <Route key={index} path={URL_BASE + category}>
              <CategoryJoke category={category} />
            </Route>
          ))}
        </Switch>
      </Router>
    </DivWrapper>
  );
};
