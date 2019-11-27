import React, { useState } from "react";
import dataCities from "./services/cities-china.json";
import "./App.css";
import CitiesList from "./components/cities-list/CitiesList.js";
import FilterCity from "./components/filter/FilterCity.js";

function App() {
  const [data, setData] = useState(dataCities.cities);
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <p>{query}</p>
      <header className="app-header">
        <h1 className="header__title">Cities of China</h1>
      </header>
      <main className="app__main">
        <FilterCity setQuery={setQuery} />
        <CitiesList data={data} />
      </main>
    </div>
  );
}

export default App;
