import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {

  const [parent, setParent] = useState(null);
  const containers = ["A","B","C"];

  const hendleDragEnd = (event: any) => {
    const {over} = event;
    setParent(over ? over.id : null);
  }

  const draggableMarkup = <Draggable><h1>Todo</h1></Draggable>;

  return (
    <div className="app">
      <DndContext onDragEnd={hendleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : <h1>Drop Here</h1>}
          </Droppable>
        ))}
      </DndContext>      
    </div>
  );
}

export default App;
