import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-18px', right: '0'}}/>
      <div className="blur" style={{top: '36%', left: '-8rem'}}/>
      <Home/>
    </div>
  );
}

export default App;
