import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setModal } from "../Modal/module/action/modal";

import "./index.css";

const navHeader = [
  { id: "1", content: "MEN", link: "/" },
  { id: "2", content: "WOMEN", link: "/" },
  { id: "3", content: "KIDS", link: "/" },
  { id: "4", content: "CUSTOMISE", link: "/" },
  { id: "5", content: "SALE", link: "/" },
  { id: "6", content: "SNKRS", link: "/" },
];

export const Header = () => {
  const { showModal } = useSelector((state) => state.modalReducer);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const header = useRef(null);
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.modalReducer);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [active]);

  return (
    <header className={`header ${active ? "active" : ""}`} ref={header}>
      <div className="header__container">
        <div className="header__top">
          <figure>
            <img src="./assets/images/logoJordan.svg" alt="logoJordan" />
          </figure>
          <ul>
            <li>
              <span>
                {userInfo?.user?.name ? "Hello " + userInfo.user.name : "Help"}
              </span>
            </li>
            <li>
              <span>Join Us</span>
            </li>
            <li>
              <span onClick={() => dispatch(setModal(!showModal))}>
                Sign In
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/", { replace: true });
                }}
              >
                Log out
              </span>
            </li>
          </ul>
        </div>
        <div className="header__main">
          <input
            className="header__checkbox-mobile"
            id="inputMobile"
            type="checkbox"
            hidden
          />
          <figure>
            <svg
              className="pre-logo-svg"
              height="80px"
              width="80px"
              fill="#111"
              viewBox="0 0 69 32"
            >
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
          </figure>
          <nav className="header__nav">
            <label
              htmlFor="inputMobile"
              className="header__navCloseMenu-mobile"
            >
              <i className="bx bx-x"></i>
            </label>
            <ul>
              {navHeader.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>
                    {item.content}{" "}
                    <i className="bx bx-chevron-right header__icon-mobile"></i>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="header__text-mobile">
              Become a Nike Member for the best products, inspiration and
              stories in sport.
            </p>
            <div className="header__auth-mobile">
              <button className="btn-flat">Join Us</button>
              <button
                className="btn-flat"
                onClick={() => dispatch(setModal(!showModal))}
              >
                Sign In
              </button>
            </div>
          </nav>

          <div className="header__right">
            <div className="header__search">
              <i className="bx bx-search header__searchIcon"></i>
              <input type="text" placeholder="Search" />
            </div>
            <Link to="/favorite" className="header__heart">
              <i className="bx bx-heart"></i>
            </Link>
            <Link to="/cart" className="header__cart">
              <i className="bx bx-cart"></i>
            </Link>

            <label htmlFor="inputMobile" className="header__menu-mobile">
              <i className="bx bx-menu"></i>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};
