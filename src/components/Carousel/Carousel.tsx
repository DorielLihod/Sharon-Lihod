import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

import c1 from "../../../public/Certification/c1.png";
import c2 from "../../../public/Certification/c2.jpg";
import c3 from "../../../public/Certification/c3.jpg";
import c4 from "../../../public/Certification/c4.jpg";
import c5 from "../../../public/Certification/c5.jpg";
import c7 from "../../../public/Certification/c7.jpg";
import c8 from "../../../public/Certification/c8.jpg";
import c9 from "../../../public/Certification/c9.jpg";
import c10 from "../../../public/Certification/c10.jpg";
export const Carousel = () => {
  const data = [c2, c1, c3, c4, c5, c7, c8, c9, c10];
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
