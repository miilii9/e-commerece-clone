import React from 'react';
import MidSlider from './MidSlider';
import img1 from '../../../assets/Images/big-s-desk.jpg';
import img2 from '../../../assets/Images/teser-cinere-desk.jpg';
import img3 from '../../../assets/Images/teser-cliven-desk.jpg';
import img4 from '../../../assets/Images/teser-flormar-desk.jpg';

export default function Items() {
  const pics = {
    img1: { url: 'google.com', img1 },
    img2: { url: 'google.com', img2 },
    img3: { url: 'google.com', img3 },
    img4: { url: 'google.com', img4 },
  };

  return (
    <div>
      <div className="dis-flex-column">
        <a href={pics.img1.url}>
          <img src={img1} alt="prd" />
        </a>
        <a href={pics.img2.url}>
          <img src={img2} alt="prd" />
        </a>
      </div>
      <MidSlider />
      <div className="dis-flex-column">
        <a href={pics.img3.url}>
          <img src={img3} alt="prd" />
        </a>
        <a href={pics.img4.url}>
          <img src={img4} alt="prd" />
        </a>
      </div>
    </div>
  );
}
