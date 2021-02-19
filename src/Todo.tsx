import { useDraggable } from '@dnd-kit/core';
import React from 'react';

const Todo = () => {

    const{attributes, listeners, setNodeRef, transform} = useDraggable({
        id: "draggable",
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div className="todo" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <h1>Todo</h1>
        </div>
    )
}

export default Todo
