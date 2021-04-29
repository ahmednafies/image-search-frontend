import React from "react";
import "./App.css";
import { VideoPreview } from "./VideoPreview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>FyndIt</p>

        <VideoPreview />
      </header>
    </div>
  );
}

export default App;
