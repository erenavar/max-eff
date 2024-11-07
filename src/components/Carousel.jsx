import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Carousel.css";




function Carousel({ data }) {

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} className="slide" />
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((item, i) => {
          return <button key={i} className="indicator"></button>
        })}
      </span>
    </div >
  )
}

export default Carousel