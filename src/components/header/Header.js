import "./Header.scss";
import React, { useState } from 'react';
import SubHeader from '../sub-header/SubHeader';
// import { PlaceOutlined, Search } from "@mui/icons-material";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function Header() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const addBoxShadow = () => {
    document.body.classList.add('dialog-background');
    document.getElementById('searchBox').classList.add('search-focus');
  }
  const removeBoxShadow = () => {
    document.getElementById('searchBox').classList.remove('search-focus');
    document.body.classList.remove('dialog-background');
  }
  return (
    <>
      <nav>
        {/* <a href="https://www.amazon.in/ref=nav_logo" className="logo-anchor"> */}
        <a href="#!" className="logo-anchor">
          <i></i>
          {/* <img src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="logo" width="102px" /> */}
          <span>.in</span>
        </a>
        <a href="#!" className="location-anchor">
          <i></i>
          <span className="location-bx">
            <span>Deliver to MUKESH</span>
            <strong>Muzaffarpur 842001‌</strong>
          </span>
        </a>
        <div className="search-container" id="searchBox" onClick={addBoxShadow} onBlur={removeBoxShadow}>
          <div className="search-box">
            <FormControl sx={{ minWidth: 60 }}>
              <Select displayEmpty value={age} onChange={handleChange} inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value={10}>Alexa Skills</MenuItem>
              </Select>
            </FormControl>
            <input type="text" />
            <a href="#!" className="btn-search">
              {/* <Search /> */}
              <i className="search-icon"></i>
            </a>
          </div>
        </div>

        <a href="#!">
          <span className="location-bx">
            <span>Hello, MUKESH</span>
            <strong>Account & Lists</strong>
          </span>
        </a>

        <a href="#!">
          <span className="location-bx">
            <span>Returns</span>
            <strong>& Orders</strong>
          </span>
        </a>
        <a href="#!">
          <span className="location-bx cart-box">
            <span className="cart-logo">
              <strong className="cart-count">0</strong>
            </span>
            <strong>Cart</strong>
          </span>
        </a>
      </nav>
      <SubHeader />
    </>
  )
}
