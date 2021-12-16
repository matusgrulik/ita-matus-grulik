import { ITask } from "./Interfaces";
import { ToDoTask } from "./Components/ToDoTask";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

function ToDoList() {
  const [task, setTask] = useState<String>("");
  const [deadline, setDeadline] = useState<Number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    //@ts-expect-error
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <App>
      <style>{`body { background-color: #000; margin: 0, padding: 0`}</style>
      <Header>
        <InputContainer>
          <Input
            type="text"
            placeholder="Your Task..."
            name="task"
            //@ts-expect-error
            value={task}
            onChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Deadline..."
            name="deadline"
            //@ts-expect-error
            value={deadline}
            onChange={handleChange}
          />
        </InputContainer>
        <Button onClick={addTask}>Add Task</Button>
      </Header>
      <Todolist>
        {todoList.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </Todolist>
    </App>
  );
}
const App = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;
const Header = styled.div`
  flex: 30%;
  background-color: green;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid green;
`;
const Button = styled.button`
  background: red;
  width: 70px;
  height: 87px;
  border: none;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 10px;
  cursor: pointer;
`;
const Todolist = styled.div`
  flex: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`;
export { ToDoList };
