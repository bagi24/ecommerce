import React, { useState } from "react";
import "./select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Select = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(name);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    // console.log(keyword);

    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });

    // console.log(list);
    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    setListData(list2);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {icon}
        <span onClick={openSelect} className="openSelect">
          {selectedItem.length > 14
            ? selectedItem.substr(0, 14) + "..."
            : selectedItem}{" "}
          <KeyboardArrowDownIcon className="arrow" />
        </span>

        {isOpenSelect === true && (
          <div className="selectDrop">
            <div className="searchField">
              <input
                type="text"
                placeholder="Search here..."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              <li
                key={0}
                onClick={() => closeSelect(0, placeholder)}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
              </li>
              {listData.map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    onClick={() => closeSelect(index + 1, item)}
                    className={`${selectedIndex === index + 1 ? "active" : ""}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
