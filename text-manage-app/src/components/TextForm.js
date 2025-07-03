import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };

   const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };

   const handleClearClick = () => {
    console.log("Text Clear: " + text);
    let newText = '';
    setText(newText);
    props.showAlert("TExt Cleared", "success")
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? '#616268' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
        Clear all text
      </button>
    </div>

    <div className="container my-4">
      <h2>Your Text Summary</h2>
      <p>{text.trim().split(/\s+/).filter(element => element.length !== 0).length} words, {text.replace(/\s/g, "").length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
