import React from 'react'
import  Slider from 'react-slick'

import { NextArrow, PrveArrow } from '../HeroCaraousel/ArrowComponent'

const EntertaimentCardCompo = (props) => {
  return (
    <>
      <div key={props.key} className='mx-2'>
        <img src={props.src} className='w-full h-full rounded-lg' alt="Entertainment" />
      </div>
    </>
  )
}

const EntertaimentCardCompoSlider = () => {
  const EntertainmentImages = [
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
  ]

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrveArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
    ],
  };
  
  return (
    <>
      <Slider {...settings} >
        {
          EntertainmentImages.map( (image, index) => 
            <EntertaimentCardCompo key={index} src={image} />
          )
        }
      </Slider>
    </>
  )
}

export default EntertaimentCardCompoSlider
