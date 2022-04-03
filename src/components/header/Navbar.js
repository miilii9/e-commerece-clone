import React from 'react'

// css
import './Navbar.css'
// logo
import logo from '../../assets/Logo/filin1.png';
import search from '../../assets/Icons/search.svg';


export default function Navbar() {
  return (
        <>
          <nav className='navbar'>
            <ul className='list'>
                  <li className='list-item flex-div'>
                      <i>icon</i>
                      <div>
                          <p className='enter'>سبد خرید</p>
                          <p style={{color:'gray'}}>کاربر مهمان خوش امدید</p>
                      </div>
                  </li> 
                  <li className='list-item flex-div'>
                      <i>icon</i>
                      <div>
                          <p className='enter'>09141156489</p>
                          <p style={{color:'gray'}}>با پشتیبانی تماس بگیرید</p>
                      </div>
                  </li> 
                  <li className='list-item flex-div'>
                      <i>icon</i>
                      <div>
                          <p className='enter'>ثبت نام / ورود</p>
                          <p style={{color:'gray'}}>کاربر مهمان خوش امدید</p>
                      </div>
                  </li> 
              </ul>
              <img src={logo} alt='img' className='logo'/>
              <form>
                  <div className='search'>
                  <button>
                      <img src={search} alt='search' className='searchIcon'/>
                  </button>
                      <input type='search' placeholder=' جستجو بر اساس... ' className='input' />
                      </div>
                  <select>
                      <option>همه دسته بندی ها</option>
                  </select>
              </form>
          </nav>
        </>
  )
}
