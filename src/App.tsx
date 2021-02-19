import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {

  const [parent, setParent] = useState(null);
  const containers = ["React","Redux","Typescript"];
  const logoMap: any = {
    "React": "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
    "Redux": "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    "Typescript": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  }

  const hendleDragEnd = (event: any) => {
    const {over} = event;
    setParent(over ? over.id : null);
  }

  const draggableMarkup = (id: string) => <Draggable id={id}><img className="skill-logo" src={logoMap[id!]} alt=""/></Draggable>;

  return (
    <div className="app">
      <DndContext onDragEnd={hendleDragEnd}>
        {draggableMarkup}   
        {containers.map((id) => (draggableMarkup(id)))}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? 
              <div className="app-selected">
                <img className="skill-logo" src={logoMap[parent!]} alt=""/>
                <h2>You selected {parent}</h2>              
              </div> : <h1>{id}</h1>}
          </Droppable>
        ))}
      </DndContext>      
    </div>
  );
}

export default App;
