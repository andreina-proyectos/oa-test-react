import React, { useState } from "react";
import dataCities from "./services/cities-china.json";
import "./App.css";
import CitiesList from "./components/cities-list/CitiesList.js";
import FilterCity from "./components/filter/FilterCity.js";
import UserCityList from "./components/user-city-list/UserCityList.js";

function App() {
  const [data] = useState(dataCities.cities);
  const [query, setQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const addCityToUserList = cityId => {
    const selectedCity = data.find(city => city.id === cityId);
    console.log(selectedCity);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header__title">Cities of China</h1>
      </header>
      <main className="app__main">
        <section className="main__filter-list-wrapper">
          <FilterCity setQuery={setQuery} />
          <CitiesList
            data={data}
            query={query}
            addCityToUserList={addCityToUserList}
          />
        </section>
        <section className="main__user-list-wrapper">
          <UserCityList />
        </section>
      </main>
    </div>
  );
}

export default App;
