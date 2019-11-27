import React from "react";
// import PropTypes from "prop-types";
import "./Filter.scss";

const FilterCity = () => {
  return (
    <div className="main__filter-wrapper">
      <label htmlFor="city-name"></label>
      <input id="city-name" type="text" className="main__filter" />
    </div>
  );
};

export default FilterCity;
