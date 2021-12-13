import React from "react";
import { BiBuildings, BiWifi } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import { MdSendToMobile } from "react-icons/md";
import DigiPayPic from "../../media/dropdownpics/dd-digipay.png";

function DigiPay({ hover }) {
  if (!hover) return null;
  return (
    <div className="digipay">
      <div className="links">
        <span>
          فعال سازی کیف پول
          <FaChevronLeft />
        </span>
        <span>
          صفحه اصلی دیجی پی
          <FaChevronLeft />
        </span>
        <span>
          <MdSendToMobile />
          خرید شارژ
        </span>
        <span>
          <BiWifi />
          خرید بسته اینترنت
        </span>
        <span>
          <BiBuildings />
          پرداخت قبض
        </span>
      </div>
      <div className="img-container">
        <img src={DigiPayPic} alt="digipay" />
      </div>
    </div>
  );
}

export default DigiPay;
