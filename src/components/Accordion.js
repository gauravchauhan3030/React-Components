import React, { useState } from 'react';

const Accordion=({items})=>{

    const [activeIndex, setActiveIndex]=useState(null)

    const handlClick=(index)=>{
        if(activeIndex!==index){
        setActiveIndex(index);
        }else{
        setActiveIndex(null)
        }
    }

    const renderedItems=items.map((item,index)=>{
        const active=activeIndex===index?'active':''
        return (
            <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={()=>{handlClick(index)}}>
                <i className="dropdown icon" />
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
            </React.Fragment>
        )
    })
    return (
        <>{renderedItems}</>
    )
}

export default Accordion;