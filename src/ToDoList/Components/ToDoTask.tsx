import { ITask } from "../Interfaces";
import React from "react";
import styled from "styled-components";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const ToDoTask = ({ task, completeTask }: Props) => {
  return (
    <Task>
      <Content>
        <Span>{task.taskName}</Span>
        <Span>{task.deadline}</Span>
      </Content>
      <Button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </Button>
    </Task>
  );
};
const Task = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  color: white;
  margin: 15px;
`;
const Content = styled.div`
  flex: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  display: grid;
  place-items: center;
  border: 3px solid white;
  width: 100%;
  height: 100%;
  font-size: 18px;
  background-color: green;
`;
const Button = styled.button`
  flex: 20%;
  height: 100%;
  border: 3px solid white;
  background-color: red;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  cursor: pointer;
`;
export { ToDoTask };
