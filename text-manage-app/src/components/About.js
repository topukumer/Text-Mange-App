import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#313A42',
    backgroundColor: props.mode === 'dark' ? '#rgb(49 58 66)' : 'white',
  };

  return (
    <div className="container m-5" style={{color: props.mode === 'dark' ? 'white' : '#313A42'}}>
      <h1 className="mb-4 fw-bold">About Us</h1>
      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Convert to Uppercase
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>Make all your text uppercase.</strong> This feature allows users to transform their input into capital letters, making it easier to emphasize or format text consistently.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Convert to Lowercase
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>Make all your text lowercase.</strong> This feature converts the entire text to lowercase letters.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Remove Extra Spaces
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Clean up extra spaces from your text.</strong> This tool removes unnecessary spaces between words.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
