import React from 'react';
import "./Carousel.css";


function Carousel({data}) {

  return (
    <div>{data.map((item,index) =>{
        return <img src={item.src} alt={item.alt} key={index}/>
    })}</div>
  )
}

export default Carousel