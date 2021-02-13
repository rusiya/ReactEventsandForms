import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [nameDisplay, setDisplayName] = useState("");

  //  const [isMouseOut, setMouseOut] = useState(false);

  function handleClick(event) {
    //    setHeadingText("Hello Again!");
    setDisplayName(name);

    event.preventDefault(); //Prevents default behaviour which is refresh the page in case of forms.
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    //    setMouseOut(true);
    setMouseOver(false);
  }

  function handleChange(event) {
    //console.log("Changed");
    //console.log(event.target.value);
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        {headingText} {nameDisplay} !
      </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
        <button
          style={
            { isMouseOver } && {
              backgroundColor: isMouseOver ? "black" : "white"
            }
          }
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
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
      </button>       */}
    </div>
  );
}

export default App;
