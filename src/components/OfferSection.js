import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsClock, BsCartPlus } from "react-icons/bs";
import offer from "../media/offerpics/offer.png";
import Button from "./Button";

function OfferSection({ offers, bg, date, cartItems, setCartItems, auth }) {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const length = offers.length;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let thatTime = new Date(`${date}`).getTime();
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

  const handleLeft = () => {
    setOffset((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const handleRight = () => {
    setOffset((prev) => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <div
      className="offer-sec"
      style={{
        background: bg,
      }}
    >
      <div className="offer">
        <img src={offer} alt="offer-img" />
        <Button>
          مشاهده همه
          <FaChevronLeft />
        </Button>
      </div>
      <div className="slider">
        <FaChevronLeft onClick={handleLeft} />
        <FaChevronRight onClick={handleRight} />
        <div
          className="moving-slider"
          style={{
            transform: `translateX(${((offset * 100) / length) * 5}%)`,
          }}
        >
          {offers.map((item, index) => (
            <div className="moving-card" key={index * 2 + 1}>
              <img src={item.pic} alt={`pic-slider${index}`} />
              <p>{item.info}</p>
              <div className="card-discount">
                <h4>{item.oldPrice}</h4>
                <span>{item.discount}%</span>
              </div>
              <p className="card-price">{item.price} تومان</p>
              <p>
                {countDown.days}:{countDown.hours}:{countDown.minutes}:
                {countDown.seconds}
                <BsClock />
              </p>
              {auth ? (
                <div
                  title="اضافه کردن به سبد خرید"
                  className="add-btn"
                  onClick={() => {
                    setCartItems([
                      ...cartItems,
                      {
                        img: item.pic,
                        info: item.info,
                        qnt: 1,
                        price: item.price,
                      },
                    ]);
                  }}
                >
                  <BsCartPlus />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
