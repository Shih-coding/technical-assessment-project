import React from "react";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid"
              src={require("./assets/event-img.png")}
            />
          </div>
          <div className="col-6">
            <div className="main-text">
            <h1>
              Imagine if <span className="snapchat">Snapchat</span> had events
            </h1>
            <h2>
              Easily host and share events with your friends across any social
              media.
              </h2>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}