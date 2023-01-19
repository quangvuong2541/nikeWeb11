import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import numberWithCommas from "../../utils/numberWithCommas";
import "./index.css";
import { getSlideList } from "./module/action/slideList";

export const Slider = () => {
  const dispatch = useDispatch();
  const { slideList } = useSelector((state) => state.sliderReducer);
  const [current, setCurrent] = useState(0);
  const [moreDetail, setMoreDetail] = useState(false);

  useEffect(() => {
    dispatch(getSlideList("male", "shoes"));
  }, [dispatch]);

  return (
    <section className={`slider ${moreDetail ? "show-detail" : ""}`}>
      <div className="slider__container">
        <div className="slider__wrapper">
          {slideList.map((slide, index) => (
            <Slide
              key={slide._id}
              slide={slide}
              active={current === index}
              slideList={slideList}
              index={index}
            />
          ))}

          {moreDetail ? (
            <button
              onClick={() => setMoreDetail(!moreDetail)}
              className="header__moreDetail"
            >
              <i className="bx bxs-chevron-up"></i>
            </button>
          ) : (
            <button
              onClick={() => setMoreDetail(!moreDetail)}
              className="header__moreDetail"
            >
              <i className="bx bxs-chevron-down"></i>
            </button>
          )}

          <ul className="slide__control">
            {slideList.map((item, index) => (
              <li
                className={current === index ? "active" : ""}
                key={index}
                onClick={() => setCurrent(index)}
              >
                <figure>
                  <img src={item.img} alt="runningShoe" />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Slide = (props) => {
  const { name, sizes, price, description, img, imgDetails } = props.slide;

  return (
    <div className={`slide ${props.active ? "active" : ""}`}>
      <div className="slide__content">
        <div className="slide__price left-to-right delay-1">
          <span>$</span>
          <p>{numberWithCommas(price)}</p>
        </div>
        <div className="slide__name left-to-right delay-2">
          <h2>{name}</h2>
        </div>
        <div className="slide__size left-to-right delay-3">
          <p>SIZE</p>
          <ul>
            {sizes.map((item, index) => (
              <li key={index}>
                <span>{item.size.replace("EU ", "")}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="slide__color left-to-right delay-4">
          <p>COLORS</p>
          <ul>
            {imgDetails.map((color, index) => (
              <li
                key={index}
                className={`${color.color} bg-${props.index}`}
              ></li>
            ))}
          </ul>
        </div>
        <div className="slide__desc left-to-right delay-5">
          <p>{description}</p>
        </div>
        <div className="slide__btn left-to-right delay-6">
          <button>Add to cart</button>
        </div>
      </div>
      <div className={`slide__image bg-${props.index}`}>
        <div className="slide__imgWrapper right-to-left delay-1">
          <figure>
            <img src={img} alt="runningShoe" />
          </figure>
        </div>
        <div className="slide__imageMore">
          <ul>
            {props.slideList.map((item, index) => (
              <li key={index} className={`bottom-up delay-${index + 2}`}>
                <figure>
                  <img
                    src={img.replace(".png", `(${index + 1}).jpg`)}
                    alt="shoeMore"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
