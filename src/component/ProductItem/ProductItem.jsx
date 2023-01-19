import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";

import "./index.css";

export const ProductItem = ({ prod }) => {
  return (
    <li>
      <Link to={`product/${prod._id}`} className="productItem">
        <figure className="productItem__image">
          <img src={prod.img} alt={prod.name} />
        </figure>
        <div className="productItem__content">
          <div className="productItem__box">
            <button className="btn-flat btn-hover">shop now</button>
            <button className="btn-flat btn-hover">
              <i className="bx bxs-cart-add"></i>
            </button>
            <button className="btn-flat btn-hover">
              <i className="bx bxs-heart"></i>
            </button>
          </div>
          <h3>{prod.name}</h3>
          <div className="productItem__price">
            <span>${numberWithCommas(prod.price * 2)}</span>
            <p>${numberWithCommas(prod.price)}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
