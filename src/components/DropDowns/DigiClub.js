import React, { useEffect, useState } from "react";
import { BsGift } from "react-icons/bs";
import { FaChevronLeft, FaClock, FaGift } from "react-icons/fa";
import { MdFlag } from "react-icons/md";
import DigiClubPic from "../../media/dropdownpics/dd-digiclub.jpeg";
import { ReactComponent as DigiClubLogo } from "../../media/svgs/digiClub.svg";

function DigiClub({ hover2 }) {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    let thatTime = new Date("jan 15,2022 15:35:56").getTime();
    setInterval(() => {
      let nowTime = new Date().getTime();
      let distance = thatTime - nowTime;
      let day = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let sec = Math.floor((distance % (1000 * 60)) / 1000);
      setCountDown({
        days: day,
        hours: hour,
        minutes: min,
        seconds: sec,
      });
    }, 1000);
  }, []);

  if (!hover2) return null;
  return (
    <div className="digiclub">
      <div className="links">
        <div className="digiclub-logo">
          <DigiClubLogo />
        </div>
        <span>
          صفحه اصلی دیجی کلاب
          <FaChevronLeft />
        </span>
        <span>
          جوایز دیجی کلاب
          <FaGift />
        </span>
        <span>
          <FaClock />
          تاریخچه امتیازات دیجی کلاب
        </span>
        <span>
          <MdFlag />
          ماموریت های دیجی کلابی
        </span>
        <span>
          <BsGift />
          قرعه کشی
          <h5>
            {countDown.days}:{countDown.hours}:{countDown.minutes}:
            {countDown.seconds}
          </h5>
        </span>
      </div>
      <div className="img-container">
        <img src={DigiClubPic} alt="digiclub" />
      </div>
    </div>
  );
}

export default DigiClub;
