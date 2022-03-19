import { Helmet } from "react-helmet";
import { LinkActive, LinkAll, LinkCompleted } from "./UrlBasement";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { STORAGE_NAME } from "./utils";
import { Task, TaskType } from "./Task";
import { Tasks } from "./Tasks";
import { TickIcon } from "./Icons";
import { themes } from "./Theme";
import { useLocalStorage } from "./utils";
import { useRef, useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin-left: 1em;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

const DivTaskFilters = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DivTaskList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  overflow: auto;
  padding-right: 15px;
`;

const DivWrapper = styled.div`
  font-family: ${themes.primaryFont};
  width: 30em;
  margin-top: 10em;
  margin-left: 47em;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & > svg {
    height: 3em;
  }
`;

const InputAddTask = styled.input`
  height: 2em;
  margin: 0;
  width: 100%;
  font-size: 150%;
  color: ${themes.primaryColor};
  background: transparent;
  border-radius: 10px;
  border: 2px solid ${themes.primaryColor};
  padding: 0 15px;
`;

const DivAddTaskBox = styled.div`
  display: flex;
  margin-bottom: 2em;
  color: ${themes.primaryColor};
`;
const getId = () => Math.random().toString(36).replace("0.", "");

export const TodoApp = () => {
  const [tasks, setTasks] = useLocalStorage<TaskType[]>(STORAGE_NAME, []);
  const [taskInput, setTaskInput] = useState("");
  const focusMe = useRef<HTMLInputElement>(null);
  const addTask = () => {
    if (taskInput === "") {
      focusMe.current?.focus();
      return;
    }
    const d = new Date();
    const newTask = {
      id: getId(),
      text: taskInput,
      completed: false,
      createdAt: d.getTime(),
      completedAt: null,
    };
    setTasks((p) => [...p, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id: string) => {
    const d = new Date();
    setTasks((p) =>
      p.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: task.completed ? null : new Date().getTime(),
            }
          : task
      )
    );

    focusMe.current?.focus();
  };

  const deleteTask = (id: string) => {
    setTasks((p) => p.filter((task) => task.id !== id));
    focusMe.current?.focus();
  };

  const handleAddKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <Router>
      <Helmet>
        <title>To do list</title>
      </Helmet>
      <DivWrapper>
        <H1>To do list application</H1>
        <DivAddTaskBox>
          <InputAddTask
            autoFocus
            ref={focusMe}
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => setTaskInput(e.target.value)}
            value={taskInput}
            onKeyPress={handleAddKey}
          />
          <Button onClick={addTask}>
            <TickIcon />
          </Button>
        </DivAddTaskBox>
        <DivTaskFilters>
          <LinkAll />
          <LinkActive />
          <LinkCompleted />
        </DivTaskFilters>
        <DivTaskList>
          <Switch>
            <Redirect exact from="/todo" to="/todo/all" />
            <Route exact path="/todo/all">
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                filterType="all"
              />
            </Route>
            <Route exact path="/todo/active">
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                filterType="active"
              />
            </Route>
            <Route exact path="/todo/completed">
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                filterType="completed"
              />
            </Route>
          </Switch>
        </DivTaskList>
      </DivWrapper>
    </Router>
  );
};
