import React, { useState } from "react";
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { GiPolarStar } from "react-icons/gi";
import { BsLink } from "react-icons/bs";
import { SiPayoneer } from "react-icons/si";
import { RiPercentFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import DigiPay from "./DropDowns/DigiPay";
import DigiClub from "./DropDowns/DigiClub";
import DigiPlus from "./DropDowns/DigiPlus";
import SuperMarket from "./DropDowns/SuperMarket";
import Discounts from "./DropDowns/Discounts";
import Categories from "./DropDowns/Categories";

function NavBar({ handleModal }) {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  const [hide, setHide] = useState(false);

  let prevScroll = window.scrollY;

  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    if (currentScroll > prevScroll) {
      setHide(true);
    } else {
      setHide(false);
    }
    //hide and show the navbar if the user keeps scrolling down or up
  });

  return (
    <nav className={hide ? "hide" : null}>
      <ul>
        <li
          className="nav-item"
          onMouseEnter={() => setHover7(true)}
          onMouseLeave={() => setHover7(false)}
        >
          <FaBars />
          دسته بندی کالاها
          <Categories hover7={hover7} />
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setHover6(true)}
          onMouseLeave={() => setHover6(false)}
        >
          <FaShoppingBasket />
          سوپرمارکت
          <SuperMarket hover6={hover6} />
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setHover5(true)}
          onMouseLeave={() => setHover5(false)}
        >
          <RiPercentFill />
          تخفیف ها و پیشنهادها
          <Discounts hover5={hover5} />
        </li>
        <li className="nav-item">
          <BsCheck2Circle />
          دیجی کالای من
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          <GiPolarStar />
          دیجی پلاس
          <DigiPlus hover3={hover3} />
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <BsLink />
          دیجی کلاب
          <DigiClub hover2={hover2} />
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <SiPayoneer />
          دیجی پی
          <DigiPay hover={hover} />
        </li>
      </ul>

      <button onClick={handleModal}>
        لطفا شهر و استان خود را انتخاب کنید
        <span>
          <HiOutlineLocationMarker />
        </span>
      </button>
    </nav>
  );
}

export default NavBar;
