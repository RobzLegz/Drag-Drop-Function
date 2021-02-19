import { useDraggable } from '@dnd-kit/core';
import React, { useState } from 'react';
import {CSS} from "@dnd-kit/utilities";

const Draggable = (props: any) => {

    const [isDropped, setIsDropped] = useState(false);

    const{attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });

    const style = transform ? {
        transform: CSS.Translate.toString(transform),
    } : undefined;

    return (
        <div className="todo" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    )
}

export default Draggable
