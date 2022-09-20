import React from "react";
import "./App.css";
import ReactRogue from "./Components/ReactRogue.js";

const App = () => (
  <div className="App">
    <ReactRogue width={40} height={40} tilesize={16}></ReactRogue>
  </div>
);

export default App;
