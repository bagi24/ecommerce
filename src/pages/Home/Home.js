import React from "react";

import "./home.css";

import HomeSlider from "./slider/HomeSlider";
import Catslider from "../../components/catSlider/Catslider";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <Catslider />
    </>
  );
};

export default Home;
