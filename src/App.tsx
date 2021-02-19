import { DndContext } from '@dnd-kit/core';
import React from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="app">
      <DndContext>
        <Todo />
      </DndContext>      
    </div>
  );
}

export default App;
