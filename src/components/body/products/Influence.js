import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import p1 from '../../../assets/Images/img-9_grande.jpg';
import p2 from '../../../assets/Images/img-9_grande.jpg';
import p3 from '../../../assets/Images/img-9_grande.jpg';
import m from '../../../assets/Images/m.jpg';

export default function Influence() {
  const ps = [
    {
      url: p1,
      name: 'gisoo diba',
      description: 'توضیحات درباره شوینده صورت کامان توسط گیسو دیبان',
      littlOne: m,
    },
    {
      url: p2,
      name: 'gisoo diba',
      description: 'توضیحات درباره شوینده صورت کامان توسط گیسو دیبان',
      littlOne: m,
    },
    {
      url: p3,
      name: 'gisoo diba',
      description: 'توضیحات درباره شوینده صورت کامان توسط گیسو دیبان',
      littlOne: m,
    },
  ];

  return (
    <div>
      <div className="header">
        <p>انفلونسر ها </p>
        <h4>در فروشگاه فیلین چکار می کنند</h4>
      </div>
      <div>
        {ps.map((p) => {
          return (
            <div>
              <div className="person">
                <img src={p.url} alt="alt" />
                <img src={p.littlOne} alt="alt" />
              </div>
              <div className="icons-on-hover">
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-cart-shopping"
                  fixedWidth
                  size="1x"
                />

                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-cart-shopping"
                  fixedWidth
                  size="1x"
                />

                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-cart-shopping"
                  fixedWidth
                  size="1x"
                />
              </div>
              <div>
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-cart-shopping"
                  fixedWidth
                  size="1x"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
