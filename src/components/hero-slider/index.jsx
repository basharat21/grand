
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef ,useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
export default function Herroslider({
  slides = [
    { navText: 'Slide 1' },
    { navText: 'Slide 2' },
    { navText: 'Slide 3' }
  ]
}) {
  const sliderRef = useRef(null);
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed:4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:1500,
   appendDots: (dots) => (
      <ul>
         {dots.map((dot, index) => (
          <><li key={index} onClick={() => goToSlide(index)} className={dot.props.className + (dot.props['aria-hidden'] === 'false' ? ' active' : '')}><span key={index} className="cursor-pointer text-17 truncate">
            {slides[index].navText}
          </span></li></>
        ))}
      </ul>
    )
  };
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div className="homeslider">
            <Slider {...settings} className="slick-design" ref={sliderRef} >
                  <div className='w-[100%] outline-none'  >
                    <Image src="/img/2.jpg" width={1920} height={700} alt='' className='w-full'/>
                  </div>
                  <div className='w-[100%]  outline-none' >
                    <Image src="/img/bnslide1.jpg" width={1920} height={700} alt='' className='w-full'/>
                  </div>
                  <div className='w-[100%]  outline-none'>
                    <Image src="/img/3.jpg" width={1920} height={700} alt='' className='w-full' />
                  </div>
         </Slider>
  </div>
  );
}
