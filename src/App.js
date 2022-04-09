import './App.css';
// components
// header
import Navbar from './components/header/Navbar';
import Catagory from './components/header/Catagory';
import Slider from './components/header/Slider';
import SideSlide from './components/header/SideSlide';
import Countdwn from './components/header/Countdwn';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// body
import Online from './components/body/Online';
import Items from './components/body/Items';
import Influence from './components/body/Influence';
import Specials from './components/body/Specials';
import Images from './components/body/Images';
// imgs
import YelwBack from './assets/Images/img-6.jpg';
import cosmetics from './assets/Export/Catagories/cosmetics.png';
import lipstick from './assets/Export/Catagories/lipstick.png';
import lotion from './assets/Export/Catagories/lotion.png';
import makeup from './assets/Export/Catagories/makeup.png';
import mascara from './assets/Export/Catagories/mascara.png';
import powder from './assets/Export/Catagories/powder.png';
import Products from './components/header/Products';
import {
  faFacebook,
  faGooglePlus,
  faInstagram,
  faTelegram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import News from './components/body/News';
import Bests from './components/body/Bests';
import Applications from './components/body/Applications';

library.add(
  fas,
  faTwitter,
  faFacebook,
  faGooglePlus,
  faTelegram,
  faInstagram,
  faYoutube
);
// let backyelw = {

// }
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Catagory />
        <div className="slidss">
          <Slider />
          <SideSlide />
        </div>
        <div className="products">
          <Products img={lipstick} text={'رژ لب'} color={'orangered'} />
          <Products img={makeup} text={'آرایش'} color={'#f7b733'} />
          <Products img={lotion} text={'لوسیون'} color={'orangered'} />
          <Products img={cosmetics} text={'لوازم بهداشتی'} color={'#f7b733'} />
          <Products img={powder} text={'پودر'} color={'orangered'} />
          <Products img={mascara} text={'ریمل'} color={'#f7b733'} />
        </div>
        <div className="countdown">
          <Countdwn />
        </div>
      </header>
      <Items />
      <Specials />
      <div className="specials">
        <Online />
        <Influence />
        <img src={YelwBack} alt="back" />
      </div>
      <Images />
      <News />
      <Bests />
      <Applications />
    </div>
  );
}

export default App;
