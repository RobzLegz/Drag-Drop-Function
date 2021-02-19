import { useDroppable } from '@dnd-kit/core';
import React from 'react';

const Droppable = (props: any) => {
    
    const {isOver, setNodeRef} = useDroppable({
        id: "droppable",
    });

    const style = {
        color: isOver ? "green" : undefined,
    };

    return (
        <div className="todo-list" ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}

export default Droppable
