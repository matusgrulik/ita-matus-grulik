import { Helmet } from "react-helmet";
import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { TaskType } from "./Task";
import { Tasks } from "./Tasks";
import { TickIcon } from "./Icons";
import { themes } from "./Theme";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

//STYLE

const H1 = styled.h1`
  margin-left: 1em;
  margin-bottom: 1em;
  text-transform: uppercase;
`;
const NavLinkStyled = styled(NavLink)`
  color: ${themes.primaryColor};
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2em;
  &.active {
    color: ${themes.secondaryColor};
  }
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

//CODE//

const getTasksFromStorage = (name: string) => {
  const data = localStorage.getItem(name);
  return data
    ? (JSON.parse(data) as TaskType[])
    : ([
        {
          id: "956465168",
          text: "Add new task ↑",
          completed: false,
          createdAt: 42,
          completedAt: null,
        },
      ] as TaskType[]);
};

const saveToStorage = <T,>(name: string, payload: T) => {
  localStorage.setItem(name, JSON.stringify(payload));
};

const STORAGE_NAME = "todoApp";

export const TodoApp = () => {
  const [tasks, setTasks] = useState(getTasksFromStorage(STORAGE_NAME));
  const [taskInput, setTaskInput] = useState("");
  const focusMe = useRef<HTMLInputElement>(null);

  useEffect(() => {
    saveToStorage(STORAGE_NAME, tasks);
  }, [tasks]);

  const addTask = () => {
    if (taskInput === "") {
      focusMe.current?.focus();
      return;
    }
    const d = new Date();
    const newTask: TaskType = {
      id: Math.random().toString(36).replace("0.", ""),
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
    setTasks((p) => {
      return p.map((task) => {
        if (task.id === id) {
          return task.completed
            ? { ...task, completed: false, completedAt: null }
            : { ...task, completed: true, completedAt: d.getTime() };
        }
        return task;
      });
    });
    focusMe.current?.focus();
  };

  const deleteTask = (id: string) => {
    setTasks((p) => p.filter((task) => task.id !== id));
    focusMe.current?.focus();
  };

  const handleAddKey = (e) => {
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
          <InputAddTaskInput
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
          <NavLinkStyled to="/todo/all">All</NavLinkStyled>
          <NavLinkStyled to="/todo/active">Active</NavLinkStyled>
          <NavLinkStyled to="/todo/completed">Completed</NavLinkStyled>
        </DivTaskFilters>
        <DivTaskList>
          <Switch>
            <Redirect exact from="/todo" to="/todo/all" />
            <Route exact path="/todo/all">
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                filterFunc={() => {
                  return true;
                }}
              />
            </Route>
            <Route exact path="/todo/active">
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                filterFunc={(task) => {
                  return !task.completed;
                }}
              />
            </Route>
            <Route exact path="/todo/completed">
              <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                filterFunc={(task) => {
                  return task.completed;
                }}
              />
            </Route>
          </Switch>
        </DivTaskList>
      </DivWrapper>
    </Router>
  );
};
