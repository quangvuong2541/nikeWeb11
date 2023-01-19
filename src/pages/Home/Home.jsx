import React from "react";
import { Banner } from "../../component/Banner/Banner";
import { Blog } from "../../component/Blog/Blog";
import { News } from "../../component/News/News";
import { ProductList } from "../../component/ProductList/ProductList";
import { Slider } from "../../component/Slider/Slider";

import "./index.css";

export const Home = () => {
  return (
    <div className="home">
      <Slider />

      <ProductList />

      <Blog />

      <Banner />

      <News />
    </div>
  );
};
