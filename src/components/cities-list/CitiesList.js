import React from "react";
import PropTypes from "prop-types";
import "./CitiesList.scss";

const CitiesList = props => {
  const {
    data,
    query,
    addCityToUserList,
    removeCityFromUserList,
    cityImage
  } = props;
  const handleCheckboxChange = event => {
    const citySelectedId = event.currentTarget.parentNode.parentNode.id;
    if (event.currentTarget.checked) {
      addCityToUserList(citySelectedId);
    } else {
      removeCityFromUserList(citySelectedId);
    }
  };

  return (
    <div className="main__cities-list">
      <ul className="cities-list">
        {data
          .filter(
            city =>
              city.name.toLowerCase().includes(query.toLowerCase()) ||
              city.chineseName.toLowerCase().includes(query.toLowerCase())
          )
          .map(city => {
            return (
              <li id={city.id} key={city.id} className="cities-list__city">
                <label className="checkbox-container">
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="city__checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
                <img src={cityImage} alt={city.name} className="city__img" />
                <div className="city__names-wrapper">
                  <p className="city__name">{city.name}</p>
                  <p className="city__chinese-name">{city.chineseName}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

CitiesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  addCityToUserList: PropTypes.func.isRequired,
  removeCityFromUserList: PropTypes.func.isRequired,
  cityImage: PropTypes.string.isRequired
};

export default CitiesList;
