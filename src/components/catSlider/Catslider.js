import React from "react";
import Slider from "react-slick";
import "./catslider.css";

const Catslider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <>
      <div className="catSliderSection">
        <div className=" container-fluid">
          <h2 className="hd"> Featured Categories</h2>
          <Slider {...settings} className="cat_slider_Main">
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                <h5>Oganic Kiwi</h5>
                <p>28 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                <h5>Peach</h5>
                <p>14 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h5>Red Apple</h5>
                <p>54 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                <h5>Snack</h5>
                <p>56 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" />
                <h5>Vegetables</h5>
                <p>72 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                <h5>Straweberry</h5>
                <p>36 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                <h5>Black plum</h5>
                <p>123 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                <h5>Custard apple</h5>
                <p>34 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                <h5>Coffe & Tea</h5>
                <p>89 items</p>
              </div>
            </div>
            <div className="item">
              {" "}
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png" />
                <h5>Headphone</h5>
                <p>87 items</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Catslider;
