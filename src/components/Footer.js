import React, { useState } from "react";
import { ReactComponent as Logo } from "../media/svgs/Logo.svg";
import { GoPackage } from "react-icons/go";
import { MdOutlineCreditScore } from "react-icons/md";
import {
  FaChevronLeft,
  FaChevronUp,
  FaHeadphonesAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import footerPic from "../media/footer.png";
import { about } from "./AboutText";
import licences from "../media/licences.png";

function Footer() {
  const [readMore, setReadMore] = useState(false);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer-top">
        <div>
          <Logo />
          <button onClick={handleUp}>
            بازگشت به بالا
            <FaChevronUp />
          </button>
        </div>
        <p>
          تلفن پشتیبانی: ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۶۲۹۹۹۹۱۱ - ۰۲۱ | هفت روز هفته، ۲۴ ساعت
          شبانه‌روز پاسخگوی شما هستیم.
        </p>
        <div className="footer-icons">
          <div className="footer-icon">
            <GoPackage />
            <h3>امکان تحویل اکسپرس</h3>
          </div>
          <div className="footer-icon">
            <MdOutlineCreditScore />
            <h3>امکان پرداخت در محل</h3>
          </div>
          <div className="footer-icon">
            <FaHeadphonesAlt />
            <h3>۷ روز هفته , ۲۴ ساعته</h3>
          </div>
          <div className="footer-icon">
            <GiReturnArrow />
            <h3>۷ روز ضمانت بازگشت کالا</h3>
          </div>
          <div className="footer-icon">
            <BsBagCheck />
            <h3>ضمانت اصل بودن کالا</h3>
          </div>
        </div>
      </div>
      <div className="footer-mid">
        <div className="footer-cols">
          <div className="footer-col">
            <h3>با دیجی کالا</h3>
            <span>اتاق خبر دیجی کالا</span>
            <span>فروش در دیجی کالا</span>
            <span>فرصت های شغلی</span>
            <span>تماس با دیجی کالا</span>
            <span>درباره دیجی کالا</span>
          </div>
          <div className="footer-col">
            <h3>خدمات مشتریان</h3>
            <span>پاسخ به پرسش های متداول</span>
            <span>رویه های بازگرداندن کالا</span>
            <span>شرایط استفاده</span>
            <span>حریم خصوصی</span>
            <span>گزارش باگ</span>
          </div>
          <div className="footer-col">
            <h3>راهنمای خرید از دیجی کالا</h3>
            <span>نحوه ثبت سفارش</span>
            <span>رویه ارسال سفارش</span>
            <span>شیوه های پرداخت</span>
          </div>
          <div className="footer-col">
            <h3>با ما همراه باشید</h3>
            <div className="socials">
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FcFilmReel />
            </div>
            <p>از جدیدترین تخفیف ها باخبر شوید</p>
            <div className="footer-input">
              <input type="text" placeholder="ایمیل خود را وارد کنید" />
              <button>ثبت</button>
            </div>
          </div>
        </div>
        <img src={footerPic} alt="footer-pic" />
      </div>
      <div className="footer-bot">
        <div>
          <h3>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h3>
          <p>
            {readMore ? about : about.substr(0, 305)}...
            <span onClick={() => setReadMore(!readMore)}>
              {readMore ? `بستن` : `مشاهده بیشتر`}
              <FaChevronLeft />
            </span>
          </p>
        </div>
        <img src={licences} alt="licences-pic" />
      </div>
      <div className="footer-end">
        <p>
          استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نوآوران فن
          آوازه (فروشگاه آنلاین دیجی‌کالا) می‌باشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
