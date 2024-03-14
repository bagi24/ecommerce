import React, { useState } from "react";
import "./select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Select = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedItem, setSelectedItem] = useState("All Categories");

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(name);
  };

  return (
    <div className="selectDropWrapper cursor position-relative">
      <span onClick={openSelect} className="openSelect">
        {selectedItem} <KeyboardArrowDownIcon className="arrow" />
      </span>

      {isOpenSelect === true && (
        <div className="selectDrop">
          <div className="searchField">
            <input type="text" />
          </div>
          <ul className="searchResults">
            <li
              onClick={() => closeSelect(0, "All Categories")}
              className={`${selectedIndex === 0 ? "active" : ""}`}
            >
              All Categories
            </li>
            <li
              onClick={() => closeSelect(1, "Milks and Dairies")}
              className={`${selectedIndex === 1 ? "active" : ""}`}
            >
              Milks and Dairies
            </li>
            <li
              onClick={() => closeSelect(2, "Wines & Drinks")}
              className={`${selectedIndex === 2 ? "active" : ""}`}
            >
              Wines & Drinks
            </li>
            <li
              onClick={() => closeSelect(3, "Clothing & beauty")}
              className={`${selectedIndex === 3 ? "active" : ""}`}
            >
              Clothing & beauty
            </li>
            <li
              onClick={() => closeSelect(4, "Fresh Seafood")}
              className={`${selectedIndex === 4 ? "active" : ""}`}
            >
              Fresh Seafood
            </li>
            <li
              onClick={() => closeSelect(5, "Pet Foods & Toy")}
              className={`${selectedIndex === 5 ? "active" : ""}`}
            >
              Pet Foods & Toy
            </li>
            <li
              onClick={() => closeSelect(6, "Fast food")}
              className={`${selectedIndex === 6 ? "active" : ""}`}
            >
              Fast food
            </li>
            <li
              onClick={() => closeSelect(7, "Baking material")}
              className={`${selectedIndex === 7 ? "active" : ""}`}
            >
              Baking material
            </li>
            <li
              onClick={() => closeSelect(8, "Vegetables")}
              className={`${selectedIndex === 8 ? "active" : ""}`}
            >
              Vegetables
            </li>
            <li
              onClick={() => closeSelect(9, "Fresh Fruit")}
              className={`${selectedIndex === 9 ? "active" : ""}`}
            >
              Fresh Fruit
            </li>
            <li
              onClick={() => closeSelect(10, "Bread and Juice")}
              className={`${selectedIndex === 10 ? "active" : ""}`}
            >
              Bread and Juice
            </li>
            <li
              onClick={() => closeSelect(11, "Milks and Dairies")}
              className={`${selectedIndex === 11 ? "active" : ""}`}
            >
              Milks and Dairies
            </li>
            <li
              onClick={() => closeSelect(12, "Wines & Drinks")}
              className={`${selectedIndex === 12 ? "active" : ""}`}
            >
              Wines & Drinks
            </li>
            <li
              onClick={() => closeSelect(13, "Clothing & beauty")}
              className={`${selectedIndex === 13 ? "active" : ""}`}
            >
              Clothing & beauty
            </li>
            <li
              onClick={() => closeSelect(14, "Fresh Seafood")}
              className={`${selectedIndex === 14 ? "active" : ""}`}
            >
              Fresh Seafood
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
