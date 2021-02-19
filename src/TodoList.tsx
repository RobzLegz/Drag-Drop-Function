import { useDroppable } from '@dnd-kit/core';
import React from 'react';

const TodoList = () => {
    
    const {isOver, setNodeRef} = useDroppable({
        id: "droppable",
    });

    const style = {
        color: isOver ? "green" : undefined,
    };

    return (
        <div className="todo-list" ref={setNodeRef} style={style}>
            <h2>List</h2>
        </div>
    )
}

export default TodoList
