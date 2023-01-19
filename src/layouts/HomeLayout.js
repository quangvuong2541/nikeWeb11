import React from "react";
import { Footer } from "../component/Footer/Footer";
import { Header } from "../component/Header/Header";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
