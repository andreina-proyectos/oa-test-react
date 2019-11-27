import React, { useState } from "react";
import dataCities from "./services/cities-china.json";
import "./App.css";
import CitiesList from "./components/cities-list/CitiesList.js";
import FilterCity from "./components/filter/FilterCity.js";

function App() {
  const [data, setData] = useState(dataCities.cities);
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header__title">Cities of China</h1>
      </header>
      <main className="app__main">
        <FilterCity />
        <CitiesList data={data} />
      </main>
    </div>
  );
}

export default App;
