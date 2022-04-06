/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './MidSlider.css';
import { useState } from 'react';

// imgs
import img1 from '../../../assets/Images/product37_large.jpg';
import img2 from '../../../assets/Images/dafi-micellar-water-oil-control-200ml-149270041902.jpg';
import img3 from '../../../assets/Images/comeon-cream-foot-246130141113.jpg';
import img4 from '../../../assets/Images/bioderma-photoderma-fluid-max-100spf-177143381203_0.jpg';
import img5 from '../../../assets/Images/bioderma-photoderma-fluid-max-100spf-177143381203_0.jpg';

export default function () {
  const images = [
    { url: img1, caption: 'کرم ضد ترک پا کامان ' },
    { url: img2, caption: 'کرم ضد ترک پا کامان ' },
    { url: img3, caption: 'کرم ضد ترک پا کامان ' },
    { url: img4, caption: 'کرم ضد ترک پا کامان ' },
    { url: img5, caption: 'کرم ضد ترک پا کامان ' },
  ];

  let startCaption = images[0].caption;
  let [caption, setCaption] = useState(startCaption);

  const onChange = (id) => {
    setCaption(images[id - 1].caption);
  };

  const className = (image) =>
    image.caption === caption ? 'caption currentCaption' : 'caption';

  return (
    <div className="slider">
      <SimpleImageSlider
        width={500}
        height={450}
        images={images}
        showBullets={false}
        showNavs={true}
        onStartSlide={onChange}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={7}
      />
    </div>
  );
}
