import React from "react";
import "./App.css"
import Button from "./components/Button"

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
              <h1>
                Imagine if <span className="snapchat">Snapchat</span> had
                events.
              </h1>
              <h2>
                Easily host and share events with your friends across any social
                media.
              </h2>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}