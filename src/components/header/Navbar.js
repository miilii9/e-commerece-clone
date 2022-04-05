import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// css
import './Navbar.css';
// logo
import logo from '../../assets/Logo/filin1.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="list" dir="rtl">
        <li className="list-item flex-div">
          <div className="header-icon-text">
            <p className="enter">سبد خرید</p>
            <p style={{ color: 'gray' }}>سفارش های اخیر شما</p>
          </div>
          <div className="header-icon">
            <div className="buy-count">3</div>
            <FontAwesomeIcon
              className="icon"
              icon="fa-solid fa-cart-shopping"
              fixedWidth
              size="1x"
            />
          </div>
        </li>
        <li className="list-item flex-div">
          <div className="header-icon-text">
            <p className="enter">09141156489</p>
            <p style={{ color: 'gray' }}>با پشتیبانی تماس بگیرید</p>
          </div>
          <div className="header-icon">
            <FontAwesomeIcon
              className="icon"
              icon="fa-solid fa-phone"
              fixedWidth
              size="1x"
            />
          </div>
        </li>
        <li className="list-item flex-div">
          <div className="header-icon-text">
            <p className="enter">ثبت نام / ورود</p>
            <p style={{ color: 'gray' }}>کاربر مهمان خوش امدید</p>
          </div>
          <div className="header-icon">
            <FontAwesomeIcon
              className="icon"
              icon="fa-solid fa-user"
              fixedWidth
              size="1x"
            />
          </div>
        </li>
      </ul>
      <img src={logo} alt="img" className="logo" />
      <form>
        <div className="search">
          <button>
            <FontAwesomeIcon
              className="searchIcon"
              icon="fa-solid fa-magnifying-glass"
              fixedWidth
              size="1x"
            />
          </button>
          <input
            type="search"
            placeholder=" جستجو بر اساس... "
            className="input"
          />
        </div>
        <select dir="rtl">
          <option>همه دسته بندی ها</option>
        </select>
      </form>
    </nav>
  );
}
