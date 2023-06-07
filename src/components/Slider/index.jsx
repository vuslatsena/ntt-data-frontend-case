
import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../Slider/style.css";

export default function Slider() {
  return (
    <div className="carousel">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
    >
      <div>
        <img src="sliderImg/sliderImg1.png" alt="img1" />
      </div>
      <div>
        <img src="sliderImg/sliderImg2.png" alt="img2" />
      </div>
      <div>
        <img src="sliderImg/sliderImg3.png" alt="img3" />
      </div>
      <div>
        <img src="sliderImg/sliderImg4.png" alt="img4" />
      </div>
    </Carousel>
    </div>
  );
}
