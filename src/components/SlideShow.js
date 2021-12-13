import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slideShowData } from "./SlideShowData";

function SlideShow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
      //go to the next slide every 4s
    let interval = setInterval(() => {
      setCurrent((prev) => (prev === 7 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
    //clean up function
  }, [current]);

  return (
    <div className="slideshow">
      <FaChevronLeft
        onClick={() => setCurrent((prv) => (prv === 0 ? 7 : prv - 1))}
      />
      <FaChevronRight
        onClick={() => setCurrent((prv) => (prv === 7 ? 0 : prv + 1))}
      />
      {slideShowData.map((slide, index) => {
        return (
          <div
            key={index}
            className={current === index ? "slide opacity" : "slide"}
          >
            <img src={slide} alt={`slidepic-${index}`} />
          </div>
        );
      })}
      <div className="dots">
        {slideShowData.map((_, index) => (
          <div
            key={index}
            className={current === index ? "dot blue" : "dot"}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
