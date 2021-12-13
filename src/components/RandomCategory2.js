import React, { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { randomCategory2Data } from "./RandomCategory2Data";

function RandomCategory2() {
  const { slides, categoryTitle } = randomCategory2Data;
  const [offset, setOffset] = useState(0);
  //change the value of transform:translate property using this state
  const length = slides.length;
  const handleLeft = () => {
    setOffset((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const handleRight = () => {
    setOffset((prev) => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <div className="random-category" style={{ flexDirection: "row-reverse" }}>
      <div className="slider-section">
        <div className="main-title">
          <h3>{categoryTitle}</h3>
          <p>بر اساس بازدید های شما</p>
        </div>
        <div className="slider">
          <FaChevronLeft onClick={handleLeft} />
          <FaChevronRight onClick={handleRight} />
          <div
            className="moving-slider"
            style={{
              transform: `translateX(${((offset * 100) / length) * 3}%)`,
            }}
          >
            {slides.map((item, index) => (
              <div className="moving-card-random" key={index * 2 + 1}>
                <img src={item.pic} alt={`pic-slider`} />
                <p>{item.info}</p>
                <p>{item.price} تومان</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="costumize-offers">
        <BsPatchCheckFill />
        <h3>شخصی سازی پیشنهاد ها</h3>
        <p>
          برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر لطفا وارد
          حساب کاربری شوید
        </p>
        <button>
          <BiLogOut />
          ورود به حساب دیجی کالا
        </button>
        <p>ثبت نام رایگان درصورت نداشتن حساب کاربری</p>
      </div>
    </div>
  );
}

export default RandomCategory2;
