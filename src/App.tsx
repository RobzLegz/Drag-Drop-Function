import { DndContext } from '@dnd-kit/core';
import React from 'react';
import './App.css';
import Todo from './Todo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app">
      <DndContext>
        <Todo />
        <Todo />
        <Todo />
        <TodoList />
      </DndContext>      
    </div>
  );
}

export default App;
