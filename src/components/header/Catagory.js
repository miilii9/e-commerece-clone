import React from 'react'
//  style import
import './Catagory.css'
import arrw from '../../assets/Icons/arrow.svg';
export default function Catagory() {
  return (
      <div className='catagory'>
          <div className='bar'>
              <div className='catgos'>
                  <p> : فروشگاه اینترنتی فیلین </p>
                  <div className='line' />
                  <ul className='list'>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />
                          <a className='list-link ' href='google.com'> ارایشی و گریم</a>
                      </li>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />                        
                          <a className='list-link ' href='google.com'>پوست</a>
                      </li>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />
                          <a className='list-link ' href='google.com'>مو</a>
                      </li>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />
                          <a className='list-link ' href='google.com'>بدن</a>
                      </li>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />
                          <a className='list-link ' href='google.com'>عطر</a>
                      </li>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />
                          <a className='list-link ' href='google.com'>بهداشت شخصی</a>
                      </li>
                      <li className='list-item mg'>
                          <img src={arrw} alt='arrow' className='arrw' />
                          <a className='list-link ' href='google.com'>مردانه</a>
                      </li>
                      
                  </ul>
              </div>
              <div className='icons'>
                  <i>ic</i>
                  <i>ic</i>
                  <i>ic</i>
              </div>
          </div>   
      </div>
  )
}
