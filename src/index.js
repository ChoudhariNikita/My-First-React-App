import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// "use strict"; // Applies to the entire script

console.log(this); // gives window object

function myFunction() {
  // "use strict"; // Applies only to this function
  console.log("The name is "+ this);
}

let myfuncweird=(number)=>{
  console.log("The name is "+ this);
}

myFunction();
myfuncweird(10);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// document.addEventListener('click',function click(){
//   alert('You\'ve clicked the button!');
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
