import React from "react";
import PropTypes from "prop-types";
import "./CitiesList.scss";
const cityImage = "https://cdn140.picsart.com/299508582161201.png?r1024x1024";

const CitiesList = props => {
  const { data, query } = props;
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
                <input type="checkbox" className="city__checkbox" />
                <img src={cityImage} alt={city.name} className="city__img" />
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired
};

export default CitiesList;
