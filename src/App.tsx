import { AiOutlineHome } from "react-icons/ai";
import { Applifting } from "./blogApplifting/appliftingBlog";
import { BlogApp } from "./blog/BlogApp";
import { BsFillFilePostFill } from "react-icons/bs";
import { ChuckNorrisApp } from "./ChuckNorris/ChuckNorrisApp";
import { CounterInRedux, store } from "./CounterRedux/CounterApp";
import { FaCat } from "react-icons/fa";
import { FaClipboardList, FaRegSmileBeam } from "react-icons/fa";
import { GiTicTacToe } from "react-icons/gi";
import { HackerTyper } from "./hackerTyper/HackerTyper";
import { HomePage } from "./homePage/homePage";
import { IoIosImages } from "react-icons/io";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MdOutlineCalculate } from "react-icons/md";
import { PexesoApp } from "./Pexeso/PexesoApp";
import { Provider } from "react-redux";
import { SiHackerrank } from "react-icons/si";
import { TicTacToeApp } from "./TicTacToe/TicTacToeApp";
import { TodoApp } from "./ToDoList/TodoApp";
import { appUrls } from "./config";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  font-size: 1.4em;
  font-weight: bold;
  margin: 2em;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 950px) {
    text-align: center;
    flex-direction: column;
  }
  @media (max-width: 1865px) {
    font-size: 1.3em;
  }
`;
const LinkNav = styled(Link)`
  max-width: 13%;
  text-align: center;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  margin: 0.8em;
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;

  @media (max-width: 950px) {
    max-width: 100%;
    margin: 0.5em;
  }
  @media (max-width: 1740px) {
    margin: 0.5em;
  }
`;
const TextDiv = styled.div`
  max-width: 100%;
`;
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <DivWrapper>
            <LinkNav to={appUrls.HOME_PAGE}>
              <AiOutlineHome /> <TextDiv>Home Page</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.APPLIFTING}>
              <FaCat />
              <TextDiv>Applifting Blog</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.HACKER_TYPER}>
              <SiHackerrank /> <TextDiv>Hacker Typer</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.TO_DO_LIST}>
              <FaClipboardList /> <TextDiv>To Do List</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.BLOG}>
              <BsFillFilePostFill /> <TextDiv>Blog</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.TIC_TAC_TOE}>
              <GiTicTacToe /> <TextDiv>Tic Tac Toe</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.PEXESO}>
              <IoIosImages /> <TextDiv>Pexeso</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.CHUNK_NORRIS}>
              <FaRegSmileBeam /> <TextDiv>Chunk Norris</TextDiv>
            </LinkNav>
            <LinkNav to={appUrls.REDUX_COUNTER}>
              <MdOutlineCalculate /> <TextDiv>Counter in redux</TextDiv>
            </LinkNav>
          </DivWrapper>
        </nav>

        <Switch>
          <Route path={appUrls.APPLIFTING}>
            <Applifting />
          </Route>
          <Route path={appUrls.HACKER_TYPER}>
            <HackerTyper />
          </Route>

          <Route path={appUrls.TO_DO_LIST}>
            <TodoApp />
          </Route>

          <Route path={appUrls.TIC_TAC_TOE}>
            <TicTacToeApp />
          </Route>

          <Route path={appUrls.PEXESO}>
            <PexesoApp />
          </Route>

          <Route path={appUrls.BLOG}>
            <BlogApp />
          </Route>

          <Route path={appUrls.CHUNK_NORRIS}>
            <ChuckNorrisApp />
          </Route>

          <Route path={appUrls.HOME_PAGE}>
            <HomePage />
          </Route>

          <Provider store={store}>
            <Route path={appUrls.REDUX_COUNTER}>
              <CounterInRedux />
            </Route>
          </Provider>
        </Switch>
      </div>
    </Router>
  );
}
