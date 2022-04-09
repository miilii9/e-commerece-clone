import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './News.css';
import Heading from '../../assets//Export/Site/bk-title.png';
import news1 from '../../assets/Export/News/blog-1.jpg';
import news2 from '../../assets/Export/News/blog-2.jpg';
export default function News() {
  const news = [
    {
      url: news1,
      date: 'پنج شنبه 2 مرداد  1399 - 17:35',
      header: 'پایه و اساس افزایش ارزش چهره شما !',
      views: 30,
      detail:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      url: news2,
      date: 'پنج شنبه 2 مرداد  1399 - 17:35',
      header: 'پایه و اساس افزایش ارزش چهره شما !',
      views: 30,
      detail:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
  ];
  return (
    <div className="news-wrapper">
      <div className="header">
        <p>بلاگ</p>
        <p className="headingp">اخرین اخبار فیلین</p>
        <img src={Heading} alt="H" />
      </div>
      <div className="news-section">
        {news.map((nw) => {
          return (
            <div className="new-section">
              <img src={nw.url} alt="img" />
              <div className="text-part">
                <div className="date">
                  <i>
                    <FontAwesomeIcon
                      className="icon"
                      icon="fa-solid fa-user"
                      fixedWidth
                      size="sm"
                    />
                    <span>{nw.date}</span>
                  </i>
                </div>
                <div className="detals">
                  <div>
                    <h4 className="nw-head">{nw.header}</h4>
                    <p className="nw-parag">{nw.detail}</p>
                  </div>
                </div>
                <div className="btn-section">
                  <div className="btn">ادامه مطلب ...</div>
                  <div>
                    <FontAwesomeIcon
                      className="icon"
                      icon="fa-solid fa-user"
                      fixedWidth
                      size="sm"
                    />
                    <span>{nw.views}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
