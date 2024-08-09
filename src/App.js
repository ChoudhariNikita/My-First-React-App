import React, { useState } from 'react';
import "./App.css";

let count = 0;
const helloimg = <img className="profile" src='/Cute_Hamster.png' alt='Cute Hamster' />;


function App() {
  const [message, setMessage] = useState("Hello, world!");
  const [textColor, setTextColor] = useState("red");
  const [textWeight, setTextWeight] = useState("bold");

  const changeMessage = () => {
    if (count === 0) {
      setMessage("You've clicked the button!");
    } else {
      setMessage("You are clicking the button again and again!");
    }
    count = count + 1;
  };

  const changeColor = () => {
    setTextColor(prevColor => (prevColor === "red" ? "blue" : "red"));
  };

  const changeTextStyle = () => {
    setTextWeight(prevWeight => (prevWeight === "bold" ? "normal" : "bold"));
  };

  return (
    <div className="App">
      {helloimg}
      <h1 style={{ color: textColor, fontWeight: textWeight }}>{message}</h1>
      <button onClick={changeMessage}>
        Click Me!
      </button>
      <button onClick={changeColor}>
        Click Me to change text color!
      </button>
      <button onClick={changeTextStyle}>
        Click Me to change text style!
      </button>
    </div>
  );
}

export default App;
