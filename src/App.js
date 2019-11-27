import React, { useState } from "react";
import dataCities from "./services/cities-china.json";
import "./App.css";
import CitiesList from "./components/cities-list/CitiesList.js";
import FilterCity from "./components/filter/FilterCity.js";
import UserCityList from "./components/user-city-list/UserCityList.js";

const cityImage = "https://cdn140.picsart.com/299508582161201.png?r1024x1024";

function App() {
  const [data] = useState(dataCities.cities);
  const [query, setQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const addCityToUserList = cityId => {
    const selectedCity = data.find(city => city.id === cityId);
    if (!userList.includes(selectedCity)) {
      userList.push(selectedCity);
      setUserList([...userList]);
    }
  };
  const removeCityFromUserList = cityId => {
    const unSelectedCityPosition = userList.findIndex(
      city => city.id === cityId
    );
    userList.splice(unSelectedCityPosition, 1);
    setUserList([...userList]);
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
            removeCityFromUserList={removeCityFromUserList}
            cityImage={cityImage}
          />
        </section>
        <section className="main__user-list-wrapper">
          <UserCityList
            userList={userList}
            cityImage={cityImage}
            removeCityFromUserList={removeCityFromUserList}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
