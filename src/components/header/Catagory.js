import React from 'react';

//  style import

import './Catagory.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Catagory() {
  return (
    <div className="catagory">
      <div className="bar">
        <div className="catgos">
          <p> : فروشگاه اینترنتی فیلین </p>

          <div className="line line-grey" />
          <div className="line" />

          <ul className="list">
            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                ارایشی و گریم
              </a>
            </li>

            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                پوست
              </a>
            </li>

            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                مو
              </a>
            </li>

            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                بدن
              </a>
            </li>

            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                عطر
              </a>
            </li>

            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                بهداشت شخصی
              </a>
            </li>

            <li className="list-item mg">
              <FontAwesomeIcon icon="fa-solid fa-chevron-down" size="sm" />

              <a className="list-link" href="google.com">
                مردانه
              </a>
            </li>
          </ul>
        </div>

        <div className="icons">
          <FontAwesomeIcon
            className="icon"
            icon={['fab', 'instagram']}
            fixedWidth
            size="1x"
          />

          <FontAwesomeIcon
            className="icon"
            icon={['fab', 'telegram']}
            fixedWidth
            size="1x"
          />

          <FontAwesomeIcon
            className="icon"
            icon={['fab', 'twitter']}
            fixedWidth
            size="1x"
          />

          <FontAwesomeIcon
            className="icon"
            icon={['fab', 'youtube']}
            fixedWidth
            size="1x"
          />
        </div>
      </div>
    </div>
  );
}
