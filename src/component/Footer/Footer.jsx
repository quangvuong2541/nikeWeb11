import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const dataFooter = {
  products: [
    { id: 1, content: "Help Center", link: "/" },
    { id: 2, content: "Contact Us", link: "/" },
    { id: 3, content: "Product Help", link: "/" },
    { id: 4, content: "Warranty", link: "/" },
    { id: 5, content: "Order Status", link: "/" },
  ],
  services: [
    { id: 1, content: "Help Center", link: "/" },
    { id: 2, content: "Contact Us", link: "/" },
    { id: 3, content: "Product Help", link: "/" },
    { id: 4, content: "Warranty", link: "/" },
    { id: 5, content: "Order Status", link: "/" },
  ],
  support: [
    { id: 1, content: "Help Center", link: "/" },
    { id: 2, content: "Contact Us", link: "/" },
    { id: 3, content: "Product Help", link: "/" },
    { id: 4, content: "Warranty", link: "/" },
    { id: 5, content: "Order Status", link: "/" },
  ],
  socials: [
    { id: 1, content: "facebook", link: "/" },
    { id: 2, content: "instagram", link: "/" },
    { id: 3, content: "youtube", link: "/" },
    { id: 4, content: "twitter", link: "/" },
  ],
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__list">
          <div className="footer__item">
            <h3 className="footer__heading">PRODUCTS</h3>
            <ul className="footer__menu">
              {dataFooter.products.map((prod) => (
                <li key={prod.id}>
                  <Link to={prod.link}>{prod.content}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item">
            <h3 className="footer__heading">SERVICES</h3>
            <ul className="footer__menu">
              {dataFooter.services.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.content}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item">
            <h3 className="footer__heading">SUPPORT</h3>
            <ul className="footer__menu">
              {dataFooter.support.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.content}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__contact" id="contact">
              <h3>Nike Shop</h3>
              <ul>
                {dataFooter.socials.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link}>
                      <i className={`bx bxl-${item.content}`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__subscribe">
              <input type="email" placeholder="ENTER YOUR EMAIL" />
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
