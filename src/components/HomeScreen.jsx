import React from 'react'
import Carousel from './Carousel'
import Slides from '../data/carouselData.json'


export default function HomeScreen() {
  const { slides } = Slides;
  return (
    <Carousel data={slides} />
  )
}
