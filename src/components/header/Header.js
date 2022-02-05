import "./Header.scss";
import React from 'react';
import SubHeader from '../sub-header/SubHeader';

export default function Header() {
  return (
    <>
      <nav>
        <a href="https://www.amazon.in/ref=nav_logo" className="logo-anchor">
          <img src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="logo" width="102px" />
          <span>.in</span>
        </a>
      </nav>
      <SubHeader />
    </>
  )
}
