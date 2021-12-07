import "./toDoList.css";
import { ITask } from "./Interfaces";
import React, { ChangeEvent, useState } from "react";
import ToDoTask from "./Components/ToDoTask";

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
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Your Task..."
            name="task"
            //@ts-expect-error
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline..."
            name="deadline"
            //@ts-expect-error
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default ToDoList;
