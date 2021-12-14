import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { randomCategoryData } from "./RandomCategoryData";
import { randomOfferForYouData } from "./ROFYdata";
import { BsCartPlus } from "react-icons/bs";

function RandomCategory({ cartItems, setCartItems, auth }) {
  const [offset, setOffset] = useState(0);
  const [random, setRandom] = useState(0);
  const { slides, categoryTitle } = randomCategoryData;
  const { price, info, oldPrice, discount, pic } =
    randomOfferForYouData[random];
  //change the content of the random offer section based on the state
  const length = slides.length;

  useEffect(() => {
    setInterval(() => {
      let number = Math.floor(Math.random() * randomOfferForYouData.length);
      setRandom(number);
    }, 4000);
    //every 4s set the random state to a new number
  }, []);

  const handleLeft = () => {
    setOffset((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const handleRight = () => {
    setOffset((prev) => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <div className="random-category">
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
                {auth ? (
                  <div
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
                    title="اضافه کردن به سبد خرید"
                    className="add-btn"
                  >
                    <BsCartPlus />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="random-offer-for-you">
        <div className="random-offer-title">
          <p>پیشنهاد لحظه ای برای شما</p>
        </div>
        <img src={pic} alt={`random-offer-${random}`} />
        <p>{info}</p>
        <div className="card-discount">
          <h4>{oldPrice}</h4>
          <span>{discount}%</span>
        </div>
        <p className="card-price">{price} تومان</p>
      </div>
    </div>
  );
}

export default RandomCategory;
