import React, { useState } from 'react';

let count = 0;

function App() {
  const [message, setMessage] = useState("Hello, world!");
  const [textColor, setTextColor] = useState("red");
  const [textWeight, setTextWeight] = useState("bold");
  const [fontStyle, setFontStyle] = useState("normal");

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
    setFontStyle(prevStyle => (prevStyle === "normal" ? "italic" : "normal"));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: textColor, fontWeight: textWeight }}>{message}</h1>
      <button 
        onClick={changeMessage} 
        style={{ borderRadius: '5px', margin: '10px' }}>
        Click Me!
      </button>
      <button 
        onClick={changeColor} 
        style={{ borderRadius: '5px', margin: '10px' }}>
        Click Me to change text color!
      </button>
      <button 
        onClick={changeTextStyle}
        style={{ borderRadius: '5px', margin: '10px' }}>
        Click Me to change text style!
      </button>
    </div>
  );
}

export default App;
