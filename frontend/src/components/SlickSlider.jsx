import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SlickSlider({ images }) {
  var settings = {
    infinite: true,
    dots: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="2xl:container">
      <Slider {...settings}>
        {images.data.map((image) => (
          <div key={image.attributes.name}>
            <img
              className="object-cover h-60 w-full"
              src={image.attributes.url}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
