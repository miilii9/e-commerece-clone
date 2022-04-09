import React from 'react';
import './Applications.css';
import app1 from '../../assets/Export/Download/bazzar.png';
import app2 from '../../assets/Export/Download/gplay.png';
import app3 from '../../assets/Export/Download/sibapp.png';
import app4 from '../../assets/Export/Download/sibche.png';
export default function Applications() {
  const apps = [app1, app2, app3, app4];
  return (
    <div className="app-wrapper-whole">
      <div className="app-wrapper">
        <p>دانلود اپلیکیشن فروشگاه اینترنتی فیلین :</p>
        <div className="app-btn">
          {apps.map((app) => {
            return (
              <a className="a" href="google">
                <img src={app} alt="pic" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
