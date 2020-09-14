import React from "react";
import "./App.css";
import MyReact from "./imageInSrc.jpg";

function App() {
  return (
    <div className="body">
      <h1 className="title red">Jsx checkpoint</h1>

      <br />

      <img className="img" src={MyReact} />

      <img className="img" src="/imageInPublic.jpg" />

      <video className="video" width="320" height="240" controls />

      <source src="myVideo.mp4" type="video/mp4" />
    </div>
  );
}

export default App;
