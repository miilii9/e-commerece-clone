import React from 'react';

// imgs
import heading from '../../assets/Images/heading_image.png';
import pic27 from '../../assets/Images/product27_large.jpg';
import pic36 from '../../assets/Images/product36_large.jpg';
import pic30 from '../../assets/Images/product39_0df1c95a-3bdd-4a54-bc57-c63aeaf4b82e_large';

import pic29 from '../../assets/Images/product34_6345d4a8-e947-42a8-a500-9e4f82d0cb55_large';
import pic28 from '../../assets/Images/product32_f9ada12e-851a-4a88-b591-9df72c2b8492_large';
// icons

import { ReactComponent as Heart } from '../../assets/Icons/heart.svg';
import { ReactComponent as Shop } from '../../assets/Icons/shopping-cart.svg';
import { ReactComponent as User } from '../../assets/Icons/user.svg';
import { ReactComponent as Star } from '../../assets/Icons/star.svg';
export default function Spec() {
  const imgs = [pic27, pic28, pic29, pic36, pic30];
  return (
    <div>
      <div className="heading">
        <h3 style={`backgroundImage=${heading}`}>محصولات منحصر به فرد</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>

      <div className="lane">
        {imgs.map((img) => {
          return (
            <div className="buttomlane">
              <div style={`backgroundImages=${img}`} className="prdct">
                <div className="icons">
                  <Shop className="shop" />
                  <User className="user" />
                  <Heart className="heart" />
                </div>
                <div className="show">نمایش محصول</div>
              </div>
              <div class="page">
                <div class="page__demo">
                  <div class="page__group">
                    <div class="rating">
                      <input
                        type="radio"
                        name="rating-star"
                        class="rating__control screen-reader"
                        id="rc1"
                      />
                      <input
                        type="radio"
                        name="rating-star"
                        class="rating__control screen-reader"
                        id="rc2"
                      />
                      <input
                        type="radio"
                        name="rating-star"
                        class="rating__control screen-reader"
                        id="rc3"
                      />
                      <input
                        type="radio"
                        name="rating-star"
                        class="rating__control screen-reader"
                        id="rc4"
                      />
                      <input
                        type="radio"
                        name="rating-star"
                        class="rating__control screen-reader"
                        id="rc5"
                      />
                      <label for="rc1" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">1</span>
                      </label>
                      <label for="rc2" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">2</span>
                      </label>
                      <label for="rc3" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">3</span>
                      </label>
                      <label for="rc4" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">4</span>
                      </label>
                      <label for="rc5" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">5</span>
                      </label>
                    </div>
                    <span class="page__hint">unselected state</span>
                  </div>
                  <div class="page__group">
                    <div class="rating">
                      <input
                        type="radio"
                        name="rating-star2"
                        class="rating__control screen-reader"
                        id="rc6"
                      />
                      <input
                        type="radio"
                        name="rating-star2"
                        class="rating__control screen-reader"
                        id="rc7"
                      />
                      <input
                        type="radio"
                        name="rating-star2"
                        class="rating__control screen-reader"
                        id="rc8"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-star2"
                        class="rating__control screen-reader"
                        id="rc9"
                      />
                      <input
                        type="radio"
                        name="rating-star2"
                        class="rating__control screen-reader"
                        id="rc10"
                      />
                      <label for="rc6" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">1</span>
                      </label>
                      <label for="rc7" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">2</span>
                      </label>
                      <label for="rc8" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">3</span>
                      </label>
                      <label for="rc9" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">4</span>
                      </label>
                      <label for="rc10" class="rating__item">
                        <Star className="rating__star" />
                        <span class="screen-reader">5</span>
                      </label>
                    </div>
                    <span class="page__hint">selected state</span>
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
