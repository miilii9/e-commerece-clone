import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Influence.css';
import Heading from '../../assets/Export/Site/bk-title.png';
import p1 from '../../assets/Images/img-9_grande.jpg';
import p2 from '../../assets/Images/img-9_grande.jpg';
import p3 from '../../assets/Images/img-9_grande.jpg';
import m from '../../assets/Images/m.jpg';

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
        <p className="headingp">در فروشگاه فیلین چکار می کنند</p>
        <img src={Heading} alt="H" />
      </div>
      <div className="influencs">
        {ps.map((p) => {
          return (
            <div className="influenc">
              <div className="person">
                <img src={p.url} alt="alt" className="main-img" />
                <img src={p.littlOne} alt="alt" className="secondry-img" />
                <p className="name">{p.name}</p>
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
              <div className="ply">
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
