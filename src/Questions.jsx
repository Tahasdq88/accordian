import React, { useState } from 'react'
import './Question.css'
const Questions = (props) => {
    const[open , setOpen]=useState(false);
    const handleClick=()=>{
        setOpen(!open)
    }
  return (
    <div >
      <div className='title_div'>
        <div  className='title_div1'>

        <p>{props.item.title}</p>
        <button onClick={handleClick}>{open ? "-" : "+"}</button>
        </div>
        {open &&<p>{props.item.info}</p>}
      </div>
    </div>
  )
}

export default Questions
