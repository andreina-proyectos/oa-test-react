import React from "react";
import PropTypes from "prop-types";
import "./UserCityList.scss";

const UserCityList = props => {
  const { userList, cityImage, removeCityFromUserList } = props;
  const handleClickDelete = event => {
    const citySelectedId = event.currentTarget.parentNode.id;
    const cityToRemoveId = citySelectedId.replace("user-", "");
    removeCityFromUserList(cityToRemoveId);
  };

  return (
    <div className="main__user-city-list">
      <ul className="user-city-list">
        {userList.map((city, index) => {
          return (
            <li
              id={`user-${city.id}`}
              key={index}
              className="user-city-list__city"
            >
              <div className="user-city__left-side-wrapper">
                <img src={cityImage} alt={city.name} className="city__img user-city__img " />
                <div className="user-city__text-wrapper">
                  <p className="user-city__name">{city.name}</p>
                  <p className="user-city__chinese-name">{city.chineseName}</p>
                </div>
              </div>
              <button
                onClick={handleClickDelete}
                className="city__delete-button"
              >
                <i className="fas fa-times" aria-label="Delete button"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

UserCityList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
  cityImage: PropTypes.string.isRequired,
  removeCityFromUserList: PropTypes.func.isRequired
};

export default UserCityList;
