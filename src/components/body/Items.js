import React from 'react';
import MidSlider from './MidSlider';
import './Items.css';
import img1 from '../../assets/Images/big-s-desk.jpg';
import img2 from '../../assets/Images/teser-cinere-desk.jpg';
import img3 from '../../assets/Images/teser-cliven-desk.jpg';
import img4 from '../../assets/Images/teser-flormar-desk.jpg';

export default function Items() {
  const pics = [
    { url: 'google.com', src: img1 },
    { url: 'google.com', src: img2 },
    { url: 'google.com', src: img3 },
    { url: 'google.com', src: img4 },
  ];

  return (
    <div className="pics">
      {pics.map((pic) => {
        return (
          <div className="pic">
            <a href={pic.url}>
              <img src={pic.src} alt="prd" />
            </a>
          </div>
        );
      })}
      <MidSlider />
    </div>
  );
}
