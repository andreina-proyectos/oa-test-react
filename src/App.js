import React, { useState } from "react";
import dataCities from "./services/cities-china.json";
import "./App.scss";
import CitiesList from "./components/cities-list/CitiesList.js";
import FilterCity from "./components/filter/FilterCity.js";
import UserCityList from "./components/user-city-list/UserCityList.js";

const cityImage = "https://cdn140.picsart.com/299508582161201.png?r1024x1024";

function App() {
  const [data] = useState(dataCities.cities);
  const [query, setQuery] = useState("");
  let [userList, setUserList] = useState([]);
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

  const handleClickAll = event => {
    const allCheckbox = event.currentTarget;
    const checkboxArray = document.querySelectorAll(".city__checkbox");
    if (allCheckbox.checked) {
      checkboxArray.forEach(checkbox => {
        if (!checkbox.checked) {
          checkbox.checked = true;
        }
      });
      const citiesToSelect = data.filter(
        city =>
          city.name.toLowerCase().includes(query.toLowerCase()) ||
          city.chineseName.toLowerCase().includes(query.toLowerCase())
      );
      setUserList(citiesToSelect);
    } else {
      checkboxArray.forEach(checkbox => {
        if (checkbox.checked) {
          checkbox.checked = false;
        }
      });
      setUserList([]);
    }
  };

  const handleClearButton = () => {
    setUserList([]);
    const checkboxArray = document.querySelectorAll(".city__checkbox");
    checkboxArray.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.checked = false;
      }
    });
    document.querySelector(".main__all-checkbox").checked = false;
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header__title">Cities of China</h1>
      </header>
      <main className="app__main">
        <section className="main__filter-list-section">
          <FilterCity setQuery={setQuery} />
          <div className="main__select-all-wrapper">
            <label className="checkbox-container">
              <input
                onClick={handleClickAll}
                type="checkbox"
                className="city__checkbox"
              />
              <span className="main__all-checkbox checkmark"></span>
            </label>
            <p className="main__all-city-text">{data.length} items</p>
          </div>
          <CitiesList
            data={data}
            query={query}
            addCityToUserList={addCityToUserList}
            removeCityFromUserList={removeCityFromUserList}
            cityImage={cityImage}
          />
        </section>
        <section className="main__user-list-section">
          <div className="user-list__functionality-wrapper">
            <p className="user-list__number-items">{userList.length} items</p>
            <button
              className="user-list__clear-btn"
              onClick={handleClearButton}
            >
              CLEAR
            </button>
          </div>
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
