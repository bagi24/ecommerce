import React, { useEffect, useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/Select";
import Logo from "../../assets/images/logo.svg";
import { default as axios } from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconWishlest from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconAccount from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import Nav from "./nav/Nav";

const Header = () => {
  const [isopenDropDown, setIsopenDropDown] = useState(false);

  const [categories, setCategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          // console.log(res.data.data);
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            //console.log(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            {/* headerSearch Start here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex  align-items-center">
                <Select
                  data={categories}
                  placeholder={"All Categories"}
                  icon={false}
                />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor " />
                </div>
              </div>
            </div>

            {/* headerSearch Start here */}

            <div className=" col-sm-5 d-flex align-items-center">
              <div className=" ml-auto d-flex align-items-center">
                <div className="countryWrapper">
                  <Select
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />}
                  />
                </div>
                <ClickAwayListener onClickAway={() => setIsopenDropDown(false)}>
                  <ul className=" list list-inline mb-0 headerTabs">
                    <li className=" list-inline-item">
                      <span>
                        <img src={IconCompare} />
                        <span className=" badge bg-success rounded-circle">
                          3
                        </span>
                        Compare
                      </span>
                    </li>

                    <li className=" list-inline-item">
                      <span>
                        <img src={IconWishlest} />
                        <span className=" badge bg-success rounded-circle">
                          6
                        </span>
                        Wishlist
                      </span>
                    </li>

                    <li className=" list-inline-item">
                      <span>
                        <img src={IconCart} />
                        <span className=" badge bg-success rounded-circle">
                          2
                        </span>
                        Cart
                      </span>
                    </li>

                    <li className=" list-inline-item">
                      <span onClick={() => setIsopenDropDown(!isopenDropDown)}>
                        <img src={IconAccount} />
                        Account
                      </span>

                      {isopenDropDown !== false && (
                        <ul className="dropDownMenu">
                          <li>
                            <Button className=" align-items-center">
                              <Person2OutlinedIcon /> My Account
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <PlaceOutlinedIcon /> Order Tracking
                            </Button>
                          </li>

                          <li>
                            <Button>
                              <FavoriteBorderOutlinedIcon /> My Wishlist
                            </Button>
                          </li>
                          <li>
                            <Button>
                              <SettingsOutlinedIcon /> Setting
                            </Button>
                          </li>
                          <li>
                            <Button>
                              {" "}
                              <LogoutOutlinedIcon /> Sign out
                            </Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;
