import { DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import './App.css';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {

  const [parent, setParent] = useState(null);
  const containers = ["React","Redux","Typescript"];
  const logoMap: any = {
    "React": {
      image: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
      text: "React is a cool front end tool",
    },
    "Redux": {
      image: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
      text: "Redux is a state management tool",
    },
    "Typescript": {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
      text: "Typescript makes javascript strongly typed",
    },
  };

  const hendleDragEnd = (event: any) => {
    const {over, active} = event; 
    setParent(over ? active.id : null);
  }

  const draggableMarkup = (id: string) => <Draggable id={id}><img className="skill-logo" src={logoMap[id!].image} alt=""/></Draggable>;

  return (
    <div className="app">
      <DndContext onDragEnd={hendleDragEnd}>
        
        <Droppable key={"parent"} id={"parent"}>
          {parent === null ? (
            <div className="info-box">
              <h2 style={{color: "#666"}}>Drop here to display more info</h2>
            </div>
          ) : (
            <div className="info-box">
              <img className="skill-logo" src={logoMap[parent!].image} alt=""/>
              <h1>{logoMap[parent!].text}</h1>              
            </div> 
          )}
        </Droppable>
        <div className="drag-image-container">
          {containers.map((id) => id !== parent ? draggableMarkup(id) : null)}
        </div>
      </DndContext>      
    </div>
  );
}

export default App;
