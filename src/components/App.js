import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [disp,setDisp]=useState("hide");
  const handleClick=()=>{
    setDisp("show");
  }
  return (
    <div className="App" id="main">
      <p id="para" className={disp}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleClick}>click</button>
    </div>
  );
}

export default App
