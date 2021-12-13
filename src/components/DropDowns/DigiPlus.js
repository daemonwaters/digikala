import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { ReactComponent as DigiPlusSvg } from "../../media/svgs/digiPlus.svg";
import DigiPlusPic from "../../media/dropdownpics/dd-digiplus.jpeg";

function DigiPlus({ hover3 }) {
  if (!hover3) return null;
  return (
    <div className="digiplus">
      <div className="content">
        <p>
          خدمات ویژه کاربران
          <DigiPlusSvg />
        </p>
        <p>
          ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا ۳۰ روز پس
          از تحویل
        </p>
        <a href="#">
          اطلاعات بیشتر و عضویت
          <FaChevronLeft />
        </a>

        <span>
          کالا های
          <DigiPlusSvg />
        </span>
      </div>
      <div className="img-container">
        <img src={DigiPlusPic} alt="digiplus-pic" />
      </div>
    </div>
  );
}

export default DigiPlus;
