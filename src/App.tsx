import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {

  const [isDropped, setIsDropped] = useState(false);

  const hendleDragEnd = (event: any) => {
    if(event.over && event.over.id === "droppable"){
      setIsDropped(true);
    }
  }

  const draggableMarkup = <Draggable><h1>Todo</h1></Draggable>;

  return (
    <div className="app">
      <DndContext onDragEnd={hendleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          {isDropped ? draggableMarkup : "Drop here"}
        </Droppable>
      </DndContext>      
    </div>
  );
}

export default App;
