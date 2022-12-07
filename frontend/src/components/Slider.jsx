import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({images, strapiUrl}) {
  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
    <Slider {...settings}>
    {images.data.map((image) => (
      <div>
        <img 
          class="object-cover h-60 w-full"
          src={`${strapiUrl}${image.attributes.url}`} />
      </div>
    ))}    
    </Slider>
    </>
  );
}