import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HackerTyper from "./hackerTyper/HackerTyper";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "2em",
              fontSize: "3em",
            }}
          >
            <div>
              <Link to="/hacker-typer" style={{ color: "green" }}>
                Hacker Typer
              </Link>
            </div>
            <div>
              <Link to="/todolist" style={{ color: "green" }}>
                To Do List
              </Link>
            </div>
            <div>
              <Link to="/tictactoe" style={{ color: "green" }}>
                Tic Tac Toe
              </Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/hacker-typer">
            <HackerTyper />
          </Route>

          <Route path="/todolist">{/*<ToDoList />*/}</Route>

          <Route path="/tictactoe">
            <div>tictactoe</div>
          </Route>

          <Route path="/">
            <div>
              <h1>HOMEWORKS</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
