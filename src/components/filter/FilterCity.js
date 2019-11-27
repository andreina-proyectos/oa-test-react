import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

const FilterCity = props => {
  const { setQuery } = props;
  return (
    <div className="main__filter-wrapper">
      <label htmlFor="city-name"></label>
      <input
        onChange={event => setQuery(event.currentTarget.value)}
        id="city-name"
        type="text"
        className="main__filter"
        placeholder="Search by name"
      />
    </div>
  );
};

FilterCity.propTypes = {
  setQuery: PropTypes.func.isRequired
};

export default FilterCity;
