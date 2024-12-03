import React from "react";
import Carousel from "./Carousel";
import "./Carousel.css";
import Slides from "../data/carouselData.json";
import Navigationbar from "./Navigationbar";

export default function HomeScreen() {
  const { slides } = Slides;
  return (
    <div>
      <Carousel data={slides} />
    </div>
  );
}
