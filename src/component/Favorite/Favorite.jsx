import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export const Favorite = () => {
  const userFavorite = JSON.parse(localStorage.getItem("user"));
  const [editUserFavorit, setEditUserFavorit] = useState(
    userFavorite.user.productsFavorite
  );

  console.log(editUserFavorit);

  return (
    <div className="favorite">
      <ul className="favorite__list">
        {editUserFavorit.map((item, index) => (
          <FavoriteItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const FavoriteItem = (props) => {
  return (
    <li>
      <Link to={`favorite/`} className="favorite">
        <figure className="favorite__image">
          <img src={props.item.img} alt={props.item.name} />
        </figure>
        <div className="favorite__content">
          <div className="favorite__box">
            <button className="btn-flat btn-hover">shop now</button>
            <button className="btn-flat btn-hover">
              <i className="bx bxs-cart-add"></i>
            </button>
            <button className="btn-flat btn-hover">
              <i className="bx bxs-heart"></i>
            </button>
          </div>
          <h3></h3>
          <div className="favorite__price">
            {/* <span>${numberWithCommas(prod.price * 2)}</span>
              <p>${numberWithCommas(prod.price)}</p> */}
          </div>
        </div>
      </Link>
    </li>
  );
};
