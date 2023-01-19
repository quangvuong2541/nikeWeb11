import React from "react";
import { useSelector } from "react-redux";

import "./index.css";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <div className="cart">
      {cart?.map((item, index) => (
        <div key={index} className="cart__item">
          <figure className="cart__image">
            <img src={item.img} alt="" />
          </figure>
          <div className="cart__info">
            <div className="cart__name">name: {item.name}</div>
            <div className="cart__price">price: {item.price}</div>
            <div className="cart__quantity">
              <section>
                <option value="">quantity: {item.quantity}</option>
              </section>
            </div>
            <div className="cart__size">size: {item.size}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
