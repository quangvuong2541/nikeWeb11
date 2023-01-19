import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "../ProductItem/ProductItem";

import "./index.css";
import { getProductList } from "./module/action/productList";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductList("male", "shoes"));
  }, [dispatch]);

  return (
    <section className="product">
      <div className="product__container">
        <h2>Clean Looks, Sustainable Materials</h2>
        <ul className="product__list">
          {productList?.map((prod) => (
            <ProductItem key={prod._id} prod={prod} />
          ))}
        </ul>
      </div>
    </section>
  );
};
