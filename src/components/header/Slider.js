import './Slider.css'
import img1 from '../../assets/Export/Slideshow/blending-change_0.jpg'
import img2 from '../../assets/Export/Slideshow/blending-change2.jpg'
import img3 from '../../assets/Export/Slideshow/blending-change9_0.jpg'
import img4 from '../../assets/Export/Slideshow/blending-change22.jpg'
import {React } from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slider() {
  // const { sOne, setSOne } = useState('');
  // const { sTwo, setSTwo } = useState('');
  // const { sThree, setSThree } = useState('');
  // const { sFour, setSFour } = useState('');
  // const { sld, setSld } = useState('');
  // const imgs = [img1, img2, img3, img4];
  const slideImages = [
  {
    url: img1,
    caption: 'Slide 1'
  },
  {
    url: img2,
    caption: 'Slide 2'
  },
  {
    url: img3,
    caption: 'Slide 3'
    },
  {
    url: img4,
    caption: 'Slide 4'
  }
];
  // let i =0
  // setInterval((
  //   () => {
  //     if (i >= 5) {
  //       i = 0;
  //     }
  //     setSld(imgs[i])
  //     i++
  //     }
  //   ) , 2000)
  return (
      <div >
      
     <Slide easing="ease" className='sldsss'>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0].url})`}}>
              <div className='navs'>
          <ul>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
          </ul>
        </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1].url})`}}>
              <div className='navs'>
          <ul>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
          </ul>
        </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2].url})`}}>
              <div className='navs'>
          <ul>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
          </ul>
        </div>
            </div>
        </div>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3].url})`}}>
              <div className='navs'>
          <ul>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
            <li><a href='google.com'>ارایشی</a></li>
          </ul>
        </div>
            </div>
        </div>
        
        </Slide>
      
          
    </div>
  )
}
