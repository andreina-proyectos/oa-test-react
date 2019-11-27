import React from "react";
import dataCities from "./services/cities-china.json";
import "./App.css";

console.log(dataCities);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header__title">Cities of China</h1>
      </header>
    </div>
  );
}

export default App;
