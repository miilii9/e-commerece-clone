import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Online.css';
// heading background pic
// import heading from '../../assets/Images/heading_image.png';
import prdct17 from '../../assets/Images/product17_large.jpg';
import prdct18 from '../../assets/Images/product25_ec097757-d4bc-45ea-bf9c-ea40b96c57e7_large.jpg';
import prdct20 from '../../assets/Images/product20_large.jpg';
import prdct37 from '../../assets/Images/product37_large.jpg';

export default function Online() {
  const products = [
    { url: prdct17, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct18, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct20, captioon: 'ریمل ضد اب', price: 145000 },
    { url: prdct37, captioon: 'ریمل ضد اب', price: 145000 },
  ];
  return (
    <div>
      {
        <div className="header">
          <p>محصولات</p>
          <p>فروشگاه اینترنتی فیلین</p>
        </div>
      }
      <div className="shops">
        {products.map((product) => {
          return (
            <div className="shop">
              <img src={product.url} alt="alt" />
              <div className="prdoct">
                <div className="icns">
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-user"
                    fixedWidth
                    size="1x"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-shopping-cart"
                    fixedWidth
                    size="1x"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-user"
                    fixedWidth
                    size="1x"
                  />
                </div>
                <div className="shw">نمایش محصول</div>
              </div>
              <div className="detail">
                <h4>{product.captioon}</h4>
                <p>{product.price + 'تومان'}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
