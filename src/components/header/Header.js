import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/Select";

import Logo from "../../assets/images/logo.svg";
const Header = () => {
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
                <Select />

                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor " />
                </div>
              </div>
            </div>

            {/* headerSearch Start here */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
