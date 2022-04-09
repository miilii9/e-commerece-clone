import React from 'react';

import Heading from '../../assets//Export/Site/bk-title.png';
import './Bests.css';
import br from '../../assets/Export/Brands/br1.png';
import br1 from '../../assets/Export/Brands/br2.png';
import br2 from '../../assets/Export/Brands/br3.png';
import br3 from '../../assets/Export/Brands/br4.png';
import br4 from '../../assets/Export/Brands/br5.png';
import br5 from '../../assets/Export/Brands/br6.png';
import br6 from '../../assets/Export/Brands/br7.png';
import br7 from '../../assets/Export/Brands/br8.png';
import br8 from '../../assets/Export/Brands/br9.png';
import br9 from '../../assets/Export/Brands/br10.png';
export default function Bests() {
  const imgs = [br, br1, br2, br3, br4, br5, br6, br7, br8, br9];
  return (
    <div className="bests-wrapper">
      <div className="header">
        <p>برترین</p>
        <p className="headingp">برند های لوازم ارایشی</p>
        <img src={Heading} alt="H" />
      </div>
      <div className="brands">
        {imgs.map((img) => {
          return <img src={img} alt="1" />;
        })}
      </div>
    </div>
  );
}
