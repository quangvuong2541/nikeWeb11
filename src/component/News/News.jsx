import React from "react";
import Slider from "react-slick";
import "./index.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} news__btnRight`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="bx bxs-chevron-right"></i>
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} news__btnLeft`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="bx bxs-chevron-left"></i>
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  currentSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const dataNews = [
  {
    id: "1",
    category: "Collection 1",
    content: "Most popular around the world",
  },
  {
    id: "2",
    category: "Collection 2",
    content: "Most popular around the world",
  },
  {
    id: "3",
    category: "Collection 3",
    content: "Most popular around the world",
  },
  {
    id: "4",
    category: "Collection 4",
    content: "Most popular around the world",
  },
  {
    id: "5",
    category: "Collection 5",
    content: "Most popular around the world",
  },
];

export const News = () => {
  return (
    <section className="news">
      <div className="news__container">
        <h2 className="news__heading">News this week</h2>
        <Slider className="news__list" {...settings}>
          {dataNews.map((news) => (
            <div className="news__itemWrap" key={news.id}>
              <div className={`news__item news__bgImg-${news.id}`}>
                <div className="news__content">
                  <div className="news__info">
                    <p>{news.category}</p>
                    <h3>{news.content}</h3>
                  </div>
                  <button>Show all</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
