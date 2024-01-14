import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a To-Do App' },
  ]);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
