import React from 'react'
import data from "./data";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {useState} from "react";


function Question({title, info}) {
    const [showInfo, setShowInfo] = useState(false);
    const handleClick = () =>{
        setShowInfo(!showInfo);
    }
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={handleClick}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>

        </header>
        {showInfo ? <p>{info}</p>: null }
    </article>
  )
}

export default Question