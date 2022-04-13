import { BlogApp } from "./blog/BlogApp";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { PexesoApp } from "./Pexeso/PexesoApp";
import { TicTacToeApp } from "./TicTacToe/TicTacToeApp";
import { TodoApp } from "./ToDoList/TodoApp";
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
              <LinkNav to="/">Home Page</LinkNav>
            </div>
            <div>
              <LinkNav to="/hacker-typer">Hacker Typer</LinkNav>
            </div>
            <div>
              <LinkNav to="/todolist">To Do List</LinkNav>
            </div>
            <div>
              <LinkNav to="/blog">Blog</LinkNav>
            </div>
            <div>
              <LinkNav to="/tictactoe">Tic Tac Toe</LinkNav>
            </div>
            <div>
              <LinkNav to="/pexeso">Pexeso</LinkNav>
            </div>
          </DivWrapper>
        </nav>

        <Switch>
          <Route path="/hacker-typer">{/*<HackerTyper />*/}</Route>

          <Route path="/todolist">
            <TodoApp />
          </Route>

          <Route path="/tictactoe">
            <TicTacToeApp />
          </Route>

          <Route path="/pexeso">
            <PexesoApp />
          </Route>

          <Route path="/blog">{<BlogApp />}</Route>

          <Route path="/">
            <DivWrapper>
              <h1>HOMEWORKS</h1>
            </DivWrapper>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
