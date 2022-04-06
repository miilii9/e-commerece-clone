import React from 'react';

// heading background pic
import heading from '../../assets/Images/heading_image.png';
export default function Online() {
  return (
    <div>
      <div className="heading" style={`backgroundImage=${heading}`}>
        <p>محصولات</p>
        <h4>فروشگاه اینترنتی فیلین</h4>
      </div>
      <div className="catgs">
        <div className="catg">محصولات جدید</div>
        <div className="catg">محصولات پرفروش</div>
        <div className="catg">محصولات پربازدید</div>
      </div>
      <div>
        <div className="prdoct">
          <div className="icns">
            <p>p</p>
            <p>p</p>
            <p>p</p>
          </div>
          <div className="shw">نمایش محصول</div>
        </div>
        <div className="detail">
          <h4>ریمل ضد اب سیاه و سفید</h4>
          <p>
            145000 <i>تومان</i>
          </p>
        </div>
      </div>
      <div>
        <div className="prdoct">
          <div className="icns">
            <p>p</p>
            <p>p</p>
            <p>p</p>
          </div>
          <div className="shw">نمایش محصول</div>
        </div>
        <div className="detail">
          <h4>ریمل ضد اب سیاه و سفید</h4>
          <p>
            145000 <i>تومان</i>
          </p>
        </div>
      </div>
      <div>
        <div className="prdoct">
          <div className="icns">
            <p>p</p>
            <p>p</p>
            <p>p</p>
          </div>
          <div className="shw">نمایش محصول</div>
        </div>
        <div className="detail">
          <h4>ریمل ضد اب سیاه و سفید</h4>
          <p>
            145000 <i>تومان</i>
          </p>
        </div>
      </div>
      <div>
        <div className="prdoct">
          <div className="icns">
            <p>p</p>
            <p>p</p>
            <p>p</p>
          </div>
          <div className="shw">نمایش محصول</div>
        </div>
        <div className="detail">
          <h4>ریمل ضد اب سیاه و سفید</h4>
          <p>
            145000 <i>تومان</i>
          </p>
        </div>
      </div>
    </div>
  );
}
