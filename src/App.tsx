import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {

  const [parent, setParent] = useState(null);
  const containers = ["React","Redux","Typescript"];
  const logoMap = {
    "React": "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    "Redux": "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    "Typescript": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  }

  const hendleDragEnd = (event: any) => {
    const {over} = event;
    setParent(over ? over.id : null);
  }

  const draggableMarkup = <Draggable><h3>Drag to show more info</h3></Draggable>;

  return (
    <div className="app">
      <DndContext onDragEnd={hendleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? 
              <div className="app-selected">
                <img src={logoMap[parent!]} alt=""/>
                <h2>You selected {parent}</h2> 
                {draggableMarkup}                
              </div> : <h1>{id}</h1>}
          </Droppable>
        ))}
      </DndContext>      
    </div>
  );
}

export default App;
