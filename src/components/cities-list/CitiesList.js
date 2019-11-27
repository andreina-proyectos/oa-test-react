import React from "react";
import PropTypes from "prop-types";
import "./CitiesList.scss";

const CitiesList = props => {
  const { data } = props;
  return (
    <div className="main__cities-list">
      <ul className="cities-list">
        {data.map(city => {
          return (
            <li key={city.id} className="cities-list__city">
              <input type="checkbox" className="city__checkbox" />
              <img src="" alt="" className="city__img" />
              <p className="city__name">{city.name}</p>
              <p className="city__">{city.chineseName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CitiesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CitiesList;
