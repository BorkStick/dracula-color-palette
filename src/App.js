import React, { useState, useEffect } from 'react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {
  const colors = [
    "#282a36",
    "#44475a",
    "#44475a",
    "#f8f8f2",
    "#6272a4",
    "#8be9fd",
    "#50fa7b",
    "#ffb86c",
    "#ff79c6",
    "#bd93f9",
    "#ff5555",
    "#f1fa8c"
  ];



  const [background, setBackground] = useState("#282a36");
  const [current, setCurrent] = useState(null);

  // clear the copy text after time
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null);
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, [current]);


  return (
    <div className="App" style={{ background: background}}>
      <h1 className="copy-text"></h1>
     {current !== null && <h1 className="copy-text">Copied <h1>{current}</h1></h1>}
     <h1>Dracula Color Palette</h1>
     <div className="container">
       {colors.map((color, index) => (
         <div key={index} className="card">
           <div style={{
             background: color,
             filter: "brightness(85%)",
             boxShadow: color === background ? "0 0 5px #000" : ""
           }} className="box" onClick={() => setBackground(color)} />
           {/* copy the text to clipboard on click */}
           <CopyToClipboard text={`${color}`}>
             <p style={{color: color === background ? "#fff" : color}} onClick={() => setCurrent(color)}>{color}</p>
           </CopyToClipboard>
         </div>
       ))}
     </div>
    </div>
  );
}

export default App;
