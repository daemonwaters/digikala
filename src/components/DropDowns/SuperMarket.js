import React from "react";
import superMarketPic from "../../media/dropdownpics/dd-supermarket.png";
import { ReactComponent as Jet } from "../../media/svgs/jetLogo.svg";

function SuperMarket({ hover6 }) {
  if (!hover6) return null;
  return (
    <div className="supermarket">
      <div className="content">
        <h3>شگفت انگیز سوپرمارکتی</h3>
        <h4>سوپرمارکت دیجی کالا</h4>
        <span>محصولات پروتينی</span>
        <span>تنقلات</span>
        <span>صبحانه</span>
        <span>نوشیدنی</span>
        <span>کالاهای اساسی و خواربار</span>
        <span>خشکبار و شیرینی</span>
      </div>
      <div className="img-container">
        <img src={superMarketPic} alt="digi-supermarket" />
        <div className="bot-sec">
          <Jet />
          <div>
            <p>دیجی کالا جت</p>
            <p>
              کالا های سوپر مارکتی با <span>ارسال رایگان</span> زیر ۳۰ دقیقه
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperMarket;
