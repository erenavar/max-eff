import React from "react";
import Carousel from "./Carousel";
import Slides from "../data/carouselData.json";
import "./Carousel.css";
import Navbar from "./Navbar";

export default function HomeScreen() {
  const { slides } = Slides;
  return (
    <div>
      <Navbar />
      <Carousel data={slides} />
    </div>
  );
}
