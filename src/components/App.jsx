import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  //  const [isMouseOut, setMouseOut] = useState(false);

  function handleClick() {
    setHeadingText("Hello Again!");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    //    setMouseOut(true);
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={
          { isMouseOver } && {
            backgroundColor: isMouseOver ? "black" : "white"
          }
        }
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
