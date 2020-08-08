import React, { useState } from 'react';

const Modal=({title,items,multiselect})=>{
    const [open,setOpen]=useState(false);
    const [selection,setSelection]=useState([]);

    const toggle=()=>setOpen(!open);

    return (
        <div>
            <div 
            tabIndex={0}
            role="button"
            onKeyPress={toggle}
            onClick={toggle}
            >
                <div>
    <p>{title}</p>
                </div>
                <div>
    <p>{open?'Closed':'Open'}</p>
                </div>

            </div>
            {open&&(
                <ul>
                {items.map(item=>{
                    return <li key={item.id}>
                        <button>
                            <span>{item.value}</span>
                        </button>
                    </li>
                })}
                </ul>
            )}
        </div>
    )
}

export default Modal;