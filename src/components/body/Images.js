import React from 'react';
import './Images.css';

import pic1 from '../../assets/Export/Banners/open_7.jpg';
import pic2 from '../../assets/Export/Banners/open5.jpg';

export default function Images() {
  return (
    <div className="img-wrapper">
      <img src={pic1} alt="a" />
      <img src={pic2} alt="b" />
    </div>
  );
}
