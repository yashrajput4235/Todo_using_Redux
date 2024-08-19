import React from 'react'
import AddTodo from './Components/AddTodo/AddTodo'
import Todos from './Components/Todos/Todos'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Todo List Application</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;


