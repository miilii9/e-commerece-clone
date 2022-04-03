
import './App.css';
// components
// header
import Navbar from './components/header/Navbar';
import Catagory from './components/header/Catagory';
import Slider from './components/header/Slider';
import SideSlide from './components/header/SideSlide';
import Countdwn from './components/header/Countdwn';

// imgs
import cosmetics from './assets/Export/Catagories/cosmetics.png'
import lipstick from './assets/Export/Catagories/lipstick.png'
import lotion from './assets/Export/Catagories/lotion.png'
import makeup from './assets/Export/Catagories/makeup.png'
import mascara from './assets/Export/Catagories/mascara.png'
import powder from './assets/Export/Catagories/powder.png'
import Products from './components/header/Products';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Catagory />
        <div className='slidss'>
          <Slider />
          <SideSlide />
        </div>
        <div className='products'>
          <Products img={lipstick} text={'رژ لب'} color={'orangered'}/>
          <Products img={makeup} text={'آرایش'} color={'#f7b733'}/>
          <Products img={lotion} text={'لوسیون'} color={'orangered'}/>
          <Products img={cosmetics} text={'لوازم بهداشتی'} color={'#f7b733'}/>
          <Products img={powder} text={'پودر'} color={'orangered'}/>
          <Products img={mascara} text={'ریمل'} color={'#f7b733'}/>  

        </div>
        <Countdwn/>
      </header>
      
      
    </div>
  );
}

export default App;
