import React from "react";
import { FaChevronLeft, FaFireAlt, FaGift, FaShopware } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { AiFillCreditCard } from "react-icons/ai";

function Discounts({ hover5 }) {
  if (!hover5) return null;
  return (
    <div className="discounts">
      <div className="title">
        <h3>مشاهده همه تخفیف ها و پیشنهادات</h3>
        <FaChevronLeft />
      </div>
      <div className="cols">
        <div className="col">
          <h4>کالاهای شگفت انگیز</h4>
          <h4>شگفت انگیز سوپرمارکتی</h4>
          <h4>فروش ویژه</h4>
          <span>کالاهای دیجیتال</span>
          <span>خودرو,ابزار و تجهیزات صنعتی</span>
          <span>مد و پوشاک</span>
          <span>اسباب بازی کودک و نوزاد</span>
          <span>کالا های ویژه سوپرمارکتی</span>
          <span>زیبایی و سلامت</span>
          <span>خانه و آشپزخانه</span>
          <span>کتاب,لوازم تحریز و هنر</span>
          <span>ورزش و سلامت</span>
        </div>
        <div className="col">
          <div className="col-top">
            <ul>
              <li>محصولات بومی و محلی</li>
              <li>عطر کمتر از ۹۹ هزارتومان</li>
              <li>اسباب بازی کمتر از ۹۹هزارتومان</li>
            </ul>
          </div>
          <div className="col-bot">
            <span>
              <FaFireAlt />
              پرفروش ترین کالاها
            </span>
            <span>
              <FaGift />
              با هر خرید هدیه بگیرید
            </span>
            <span>
              <IoMdPricetag />
              تخفیف تا پایان فصل
            </span>
            <span>
              <AiFillCreditCard />
              کارت هدیه خرید از دیجی کالا
            </span>
            <span>
              <FaShopware />
              تازه های فروشنده های جدید
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;
