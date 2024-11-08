import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./Carousel.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={() => setSlide((slide - 1 + data.length) % data.length)} />

      {data.map((item, index) => (
        <div key={index} className={slide === index ? "slide" : "slide slide-hidden"}>
          <img src={item.src} alt={item.alt} className="slide-image" />
          <div className="slide-content">
            <h2 className="slide-title">{item.title}</h2>
            <p className="slide-description">{item.description}</p>
          </div>
        </div>
      ))}

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />

      <span className="indicators">
        {data.map((_, i) => (
          <button
            key={i}
            className={slide === i ? 'indicator' : 'indicator indicator-inactive'}
            onClick={() => setSlide(i)}
          />
        ))}
      </span>
    </div>
  );
}

export default Carousel;
