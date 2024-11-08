import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Carousel.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0)
  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} className={index ? "slide" : "slide slide-hidden"} />
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((item, i) => {
          return <button key={i} onClick={null} className={slide === i ? 'indicator' : 'indicator indicator-inactive'}></button>
        })}
      </span>
    </div >
  )
}

export default Carousel