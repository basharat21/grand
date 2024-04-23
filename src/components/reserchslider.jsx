import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      Previous
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      Next
    </button>
  );
};

const Rslider = () => {
  const imageSliderRef = useRef(null);
  const contentSliderRef = useRef(null);

  useEffect(() => {
    if (imageSliderRef.current && contentSliderRef.current) {
      contentSliderRef.current.slickPrev();
      contentSliderRef.current.slickNext();
    }
  }, []);

  const imageSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const contentSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    asNavFor: imageSliderRef.current,
  };

  return (
    <div className="section reserch-slider max-w-7xl  mx-auto pt-10 md:py-10 lg:py-20 lg:flex slider-container  ">
      <div className="z-50 lg:w-1/2 transform lg:-mr-20 lg:m-12 lg:px-20 lg:py-16 px-8 py-16 from-primary-light " >
        <h2 className="text-white">Exploration and Advancement</h2>
        <Slider
          className="content-slider"
          {...contentSliderSettings}
          ref={contentSliderRef}
        >
          <div className="text-white ">
            We're a company fueled by research and development, boasting a diverse product lineup spanning orals, injectables, and biotherapeutics. Our robust in-house R&D forms the bedrock of our operations, driving ongoing expansion and innovation.
          </div>
          <div className="text-white ">
            We're a company fueled by research and development, boasting a diverse product lineup spanning orals, injectables, and biotherapeutics. Our robust in-house R&D forms the bedrock of our operations, driving ongoing expansion and innovation.
          </div>
          <div className="text-white ">
            We're a company fueled by research and development, boasting a diverse product lineup spanning orals, injectables, and biotherapeutics. Our robust in-house R&D forms the bedrock of our operations, driving ongoing expansion and innovation.
          </div>
        </Slider>
      </div>

      <div className="lg:w-1/2 h-500 md:h-auto bg-cover">
        <Slider
          className="image-slider"
          {...imageSliderSettings}
          ref={imageSliderRef}
         >
          <div>
            <div className="rslide1"></div>
          </div>
          <div>
            <div className=" rslide2"></div>
          </div>
          <div>
            <div  className="rslide3"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Rslider;
