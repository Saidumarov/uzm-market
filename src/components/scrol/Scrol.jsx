import React, { useState, useEffect } from "react";
import "./scrol.css";

const Scrol = (itme) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = [itme.img, itme.img1, itme.img2, itme.img3, itme.img4];
  const [stopa, setStopa] = useState(false);

  const changeImage = (step) => {
    let newIndex = currentIndex + step;

    if (newIndex > imageList.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = imageList.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  const run = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  useEffect(() => {
    let interval;
    if (!stopa) {
      interval = setInterval(run, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [stopa]);

  const handlePrevClick = () => {
    changeImage(-1);
    setStopa(true);
  };

  const handleNextClick = () => {
    changeImage(1);
    setStopa(true);
  };

  return (
    <div className="scrrol">
      <div className="but">
        <button className="right" onClick={handlePrevClick}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>
      <div className="scrol">
        <div
          className="imgscrol"
          style={{ transform: `translateX(${-currentIndex * 1250}px)` }}
        >
          {imageList.map((src, index) => (
            <img key={index} src={src} alt="" />
          ))}
        </div>
      </div>
      <div className="but">
        <button className="left" onClick={handleNextClick}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Scrol;
