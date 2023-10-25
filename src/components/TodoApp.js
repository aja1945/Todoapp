import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <div className="add-todo">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

import TodoApp from './components/TodoApp';

function App() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <TodoApp />
      </div>
    );
  }