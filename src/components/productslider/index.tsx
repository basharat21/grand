
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef ,useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Productslide from "./productslide";
export default function Productslider({
}) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
       
    ]
};
  return (
    <div className="productslider">
             <Slider {...settings} className="slick-design" >
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'GASTRO PRODUCTS'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'ANTI-OSTEOPOROTIC'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'NUTRACEUTICALS'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'ANTIBIOTICS'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'HORMONAL PRODUCTS'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'ANALGESIC, ANT-INFLAMMATORY'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'ANTI EMETIC'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'ANTI-FUNGAL'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'CARDIOVASCULAR PRODUCTS'}/>
                    <Productslide image={'/img/gastroproduct.jpg'} productname={'DIABETIC PRODUCTS'}/>
           </Slider>
  </div>
  );
}
