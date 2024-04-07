import React from "react";

import "./home.css";

import HomeSlider from "./slider/HomeSlider";
import Catslider from "../../components/catSlider/Catslider";
import Banners from "../../components/banners/Banners";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Catslider />

      <Banners />

      <section className="homeProducts">
        <div className=" container-fluid">
          <div className=" d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className=" list list-inline ml-auto filterTab">
              <li className=" list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className=" list-inline-item">
                <a className="cursor">Milks & Dairies</a>
              </li>
              <li className=" list-inline-item">
                <a className="cursor">Coffes & Teas</a>
              </li>
              <li className=" list-inline-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className=" list-inline-item">
                <a className="cursor">Meats</a>
              </li>
              <li className=" list-inline-item">
                <a className="cursor">Vegetables</a>
              </li>
              <li className=" list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
