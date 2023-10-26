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

  import Signup from './components/Signup';
  import Login from './components/Login';
  function App() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <Signup handleSignup={handleSignup} />
        <Login handleLogin={handleLogin} />
        <TodoApp />
      </div>
    );
  }

  const handleSignup = (username, password) => {
    fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User created successfully') {
          // Handle successful registration (e.g., show a success message)
          console.log('User registered successfully.');
        } else {
          // Handle registration error (e.g., show an error message)
          console.error('Registration failed.');
        }
      });
  };
  
  const handleLogin = (username, password) => {
    fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Handle successful login (e.g., store the token and redirect)
          localStorage.setItem('token', data.token);
          console.log('Login successful.');
        } else {
          // Handle login error (e.g., show an error message)
          console.error('Login failed.');
        }
      });
  };