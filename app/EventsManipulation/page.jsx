"use client";

import { useState } from "react";

const TodoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const inputStyle = {
    padding: "5px",
    marginRight: "10px",
    color: "black",
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  const taskListStyle = {
    listStyleType: "none",
    paddingLeft: "0",
  };

  return (
    <div style={{
     textAlign: "center"
    }}>
      <h2 style={{ margin: "20px"}}>Lista de Tarefas</h2>
      <div>
        <input
          type="text"
          placeholder="Adicionar uma tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTask} style={buttonStyle}>
          Adicionar
        </button>
      </div>
      <ul style={taskListStyle}>
        {tasks.map((task, index) => (
          <li key={index} style={{margin: "10px"}}>
            {task}
            <button onClick={() => removeTask(index)} style={buttonStyle}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
