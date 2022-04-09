import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Specials.css';
// heading background pic
import Heading from '../../assets//Export/Site/bk-title.png';
import prdct17 from '../../assets/Images/product17_large.jpg';
import prdct18 from '../../assets/Images/product25_ec097757-d4bc-45ea-bf9c-ea40b96c57e7_large.jpg';
import prdct20 from '../../assets/Images/product20_large.jpg';
import prdct37 from '../../assets/Images/product37_large.jpg';

export default function Specials() {
  const products = [
    { url: prdct17, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct18, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct20, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct37, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct17, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct18, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct20, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct37, captioon: 'ریمل ضد اب', price: 145000 },
  ];

  const scrollRight = (e) => {
    console.log(e.currentTarget.parentNode.parentNode.querySelector('.shops'));
    e.currentTarget.parentNode.parentNode.scrollLeft += 100;
  };

  const scrollLeft = (e) => {};

  return (
    <div className="wrapper">
      <div className="online-wrapper">
        <div className="header">
          <p>محصولات</p>
          <p className="headingp">فروشگاه اینترنتی فیلین</p>
          <img src={Heading} alt="H" />
        </div>

        <div className="shops">
          {products.map((product) => {
            return (
              <div className="shop">
                <img src={product.url} alt="alt" />
                <div className="prdoct">
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-user"
                    fixedWidth
                    size="sm"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-shopping-cart"
                    fixedWidth
                    size="sm"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-heart"
                    fixedWidth
                    size="sm"
                  />
                  <div className="shw">نمایش محصول</div>
                </div>
                <div className="detail">
                  <h4>{product.captioon}</h4>
                  <p>{product.price} تومان</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="arrows">
        <div className="right-arrow" onClick={scrollRight}>
          <FontAwesomeIcon
            className="icon-arrow-right"
            icon="fa-solid fa-arrow-left"
            fixedWidth
            size="sm"
          />
          <div className="lne"></div>
        </div>
        <div className="left-arrow" onClick={scrollLeft}>
          <FontAwesomeIcon
            className="icon-arrow-left"
            icon="fa-solid fa-arrow-right"
            fixedWidth
            size="sm"
          />
          {/* <div className="lne"></div> */}
        </div>
      </div>
    </div>
  );
}
