//  @Package
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
//  @Own
import "./style.css";

export const ItemList = ({ title, picture, price, id }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/items/${id}`);
  };
  return (
    <div className="container-box">
      <div className="box">
        <div className="container-image" onClick={handleClick}>
          <img src={picture} alt="pictures of products" width="100%" />
        </div>
        <div className="container-price">
          <h2 onClick={handleClick}>{title}</h2>
          <p>
            {price.currency === "USD" ? "U$S" : "$"}
            {new Intl.NumberFormat("de-IN", {
              maximumSignificantDigits: 3,
            }).format(price.amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};
