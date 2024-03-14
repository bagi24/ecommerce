import React, { useEffect, useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/Select";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";

const Header = () => {
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
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            {/* headerSearch Start here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex  align-items-center">
                <Select data={categories} placeholder={"All Categories"} />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor " />
                </div>
              </div>
            </div>

            {/* headerSearch Start here */}

            <div className=" col-sm-5 d-flex align-items-center">
              <div className="countryWrapper">
                <Select data={countryList} placeholder={"Your Location"} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
