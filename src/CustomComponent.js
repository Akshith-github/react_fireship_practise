import React from  'react';
import {useState} from "react";

export default function Item(props){
    const [count,setCount] = useState(0);
    return (
        <>
        <p>
            {props.text}
            this component is clicked  {count} times
        </p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
        </>
        
    );
}