import { ArrowDropDown } from '@mui/icons-material';
import React from 'react';
import SideBar from './sidebar/SideBar';
import './SubHeader.scss';

export default function SubHeader() {
  const toggleSidebar = () => {
    document.getElementById('sideBarBox').classList.add('opened');
  }
  const closeSideBar = () => {
    document.getElementById('sideBarBox').classList.remove('opened');
  }
  return (
    <>
      <div className='sub-header'>
        <a href="#!" className='menu' onClick={toggleSidebar}>
          <i className='menu-icon'></i>
          <strong>All</strong>
        </a>
        <a href="#!" className='with-dropdown'>
          <span>Browsing History</span>
          <ArrowDropDown />
        </a>
        <a href="#!">
          <span>Video Games</span>
        </a>
        <a href="#!">
          <span>Toys & Games</span>
        </a>
        <a href="#!">
          <span>Computers</span>
        </a>
        <a href="#!">
          <span>Gift Cards</span>
        </a>
        <a href="#!">
          <span>Kindle eBooks</span>
        </a>
        <a href="#!">
          <span>Baby</span>
        </a>
        <a href="#!">
          <span>Sports, Fitness & Outdoors</span>
        </a>
      </div>
      <div className='sidebar' id='sideBarBox'>
        <SideBar />
        <div className='sidebar-blur-area' onClick={closeSideBar}>
          <a href="#!" className='sidebar-close'>
            <i></i>
          </a>
        </div>
      </div>
    </>
  )
}
