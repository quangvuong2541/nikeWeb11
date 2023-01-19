import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import API from "../../axios/API";
import { getProductDetail } from "../../component/ProductList/module/action/productList";
import { cartAction } from "../Cart/module/action/cartAction";

import "./index.css";

export const ProductDetail = (props) => {
  const { idProduct } = useParams()
  const dispatch = useDispatch();
  const [productDetail, setDetailProduct] = useState(null)
  const [size, setSize] = useState("");
  const [flag, setFlag] = useState(false);
  const { token } = JSON.parse(localStorage.getItem("user"));
  React.useEffect(() => {
    const callAPI = async () => {

      const res = await API(`product/${idProduct}`, "GET")

      setDetailProduct(res.data)

    }
    callAPI()
  }, [idProduct])

  const [index, setIndex] = React.useState(0)
  const getIndexImg = (index) => {
    setIndex(index)
  }

    const prod = {
      id: productDetail._id,
      name: productDetail.name,
      message: productDetail.message,
      sizes: productDetail.sizes,
      size: size,
      price: productDetail.price,
      quantity: 1,
      color: productDetail.imgDetails[index].color,
      img: productDetail.imgDetails[index].imgs[index].img,

    };

  




  const checkSelectedSize = () => {
    if (size === "") {
      setFlag(true);
      alert("please select size!!!");
      return;
    }
    setFlag(false);
  };

  const selectedSize = (value) => {
    setSize(value);
  };

  const addToCart = () => {
    // console.log(prod);
    if(ProductDetail){
      dispatch(cartAction(productDetail, token));
    }
  };



  return (
    <div className="productDetail">
      <div className="productDetail__container">
        <div className="productDetail__wrapper">
          <div className="productDetail__imgDetails">
            <ul>
              {productDetail?.imgDetails[0].imgs.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <div className="productDetail__info">
            <div className="productDetail__price">
              <span>{productDetail?.message}</span>
              <span>{productDetail?.price}</span>
            </div>
            <div className="productDetail__name">{productDetail?.name}</div>
            <figure className="productDetail__img">
              <img src={productDetail?.img} alt="" />
            </figure>
            <ul className="productDetail__size">
              {productDetail?.sizes.map((item, index) => (
                <li
                  onClick={() => selectedSize(item.size)}
                  className={size === item.size ? "active" : ""}
                  key={index}
                >
                  {item.size}
                </li>
              ))}
            </ul>
            <div className="productDetail__btn">
              {!size ? (
                <button
                  onClick={(e) => {
                    checkSelectedSize();
                  }}
                  className="btn-flat btn-hover productDetail__bag"
                >
                  Add to bag
                </button>
              ) : (
                <Link to="/cart">
                  <button
                    onClick={(e) => {
                      checkSelectedSize();
                      addToCart();
                    }}
                    className="btn-flat btn-hover productDetail__bag"
                  >
                    Add to bag
                  </button>
                </Link>
              )}

              <button className="btn-flat btn-hover productDetail__favorite">
                Favorite
              </button>
            </div>
            <div className="productDetail__desc">{productDetail?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
