import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "./Carousel.css";




function Carousel({ data }) {

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill />
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} className="slide" />
      })}
      <BsArrowRightCircleFill />
    </div>
  )
}

export default Carousel