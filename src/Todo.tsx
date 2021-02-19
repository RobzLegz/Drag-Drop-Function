import { useDraggable } from '@dnd-kit/core';
import React from 'react';
import {CSS} from "@dnd-kit/utilities";

const Todo = () => {

    const{attributes, listeners, setNodeRef, transform} = useDraggable({
        id: "draggable",
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    return (
        <div className="todo" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <h1>Todo sds</h1>
        </div>
    )
}

export default Todo
