

import React, { useState } from "react";

import "./eightBall.css";

function rand(arr){
    let randIdx = [Math.floor(Math.random() * arr.length)];

    return arr[randIdx]
}


const EightBall = ({answers}) => {

    
    const [msg, setMsg] = useState("think of a Question");
    const [color, setColor] = useState("black")

    function handleClick() {
        const {msg, color} = rand(answers);
        setMsg(msg);
        setColor(color)
    }

   
    return (
      <div className="EightBall">
        <div style={{backgroundColor : color}} onClick={handleClick}>
         <b>{msg}</b>
        </div>
      </div>
    );
}

export default  EightBall;