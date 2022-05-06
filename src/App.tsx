import { BlogApp } from "./blog/BlogApp";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { PexesoApp } from "./Pexeso/PexesoApp";
import { TicTacToeApp } from "./TicTacToe/TicTacToeApp";
import { TodoApp } from "./ToDoList/TodoApp";
import { appUrls } from "./config";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  font-size: 2em;
  margin: 2em;
  justify-content: center;
`;
const LinkNav = styled(Link)`
  margin: 1em;
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;
`;
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <DivWrapper>
            <div>
              <LinkNav to={appUrls.HOME_PAGE}>Home Page</LinkNav>
            </div>
            <div>
              <LinkNav to={appUrls.HACKER_TYPER}>Hacker Typer</LinkNav>
            </div>
            <div>
              <LinkNav to={appUrls.TO_DO_LIST}>To Do List</LinkNav>
            </div>
            <div>
              <LinkNav to={appUrls.BLOG}>Blog</LinkNav>
            </div>
            <div>
              <LinkNav to={appUrls.TIC_TAC_TOE}>Tic Tac Toe</LinkNav>
            </div>
            <div>
              <LinkNav to={appUrls.PEXESO}>Pexeso</LinkNav>
            </div>
          </DivWrapper>
        </nav>

        <Switch>
          <Route path={appUrls.HACKER_TYPER}>{/*<HackerTyper />*/}</Route>

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

          <Route path={appUrls.HOME_PAGE}>
            <DivWrapper>
              <h1>HOMEWORKS</h1>
            </DivWrapper>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
