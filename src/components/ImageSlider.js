import React from 'react'
import ph1 from '../assets/ph1.jpg'
import ph2 from '../assets/ph2.png'
import ph3 from '../assets/ph3.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>

    <div className="">
      <div className='ml-8 mr-8'>
        <Slider {...settings}>
          {imagedata.map((d)=>
            <div className=' flex justify-center items-center'>
              <div className='rounded flex justify-center items-center'>
                <img src={d.img} alt={d.name} className='rounded object-cover scale-90 justify-center items-center'/>            
             </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
    </>
  )
}

export default ImageSlider


const imagedata = [
  {
    name:'slide-1',
    img:ph1
  },
  {
    name:'slide-2',
    img:ph2
  },
  {
    name:'slide-3',
    img:ph3
  }
]