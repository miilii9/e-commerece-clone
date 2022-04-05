import './Slider.css';
import img1 from '../../assets/Export/Slideshow/blending-change_0.jpg';
import img2 from '../../assets/Export/Slideshow/blending-change2.jpg';
import img3 from '../../assets/Export/Slideshow/blending-change9_0.jpg';
import img4 from '../../assets/Export/Slideshow/blending-change22.jpg';
import SimpleImageSlider from 'react-simple-image-slider';
import { React, useEffect, useRef, useState } from 'react';

export default function Slider() {
  const images = [
    {
      url: img1,
      caption: 'عید تا عید',
    },
    {
      url: img2,
      caption: 'اسبری تقویت کننده مو',
    },
    {
      url: img3,
      caption: 'محصولات صحت',
    },
    {
      url: img4,
      caption: 'محصولات ببک',
    },
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
        width={790}
        height={360}
        images={images}
        showBullets={false}
        showNavs={true}
        onStartSlide={onChange}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={7}
      />
      <div className="slider-caption">
        {images.map((image) => {
          return (
            <p className={className(image)} key={image.url}>
              {image.caption}
            </p>
          );
        })}
      </div>
    </div>
  );
}
