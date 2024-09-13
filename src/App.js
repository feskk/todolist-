import React, { useState } from 'react';
import AddTask from './Components/AddTask';
import TodoList from './Components/TodoList';
import './App.css';  // Importation des styles



function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
    <div className='header-container'>
      <h1>Todo List & Checklist Dynamique 📝</h1>

      <div className="todo-container">
        <div className="todo-content">
          <AddTask addTask={addTask} />
          <TodoList tasks={tasks} removeTask={removeTask} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
