import React from 'react';
import "./Slider.css";
import Slider from "react-slick";
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };


  return (
    <div>
 <div className='container sld'>
     <h1 className='mb-4 wlc'>--ACTUALITÉS-- </h1>
        <Slider {...settings}>
          <div>
          <img className='ggg' src="/images/stb1.jpg" />
        
         
          </div>
       
          <div>
          <img className='ggg' src="/images/stb5.jpg" />
          
          </div>
          <div>
          <img className='ggg' src="/images/stb2.jpg" />
          
          </div>
          <div>
          <img className='ggg' src="/images/stb7.jpg" />
         
          </div>
         
        </Slider>
      </div>
    </div>
  )
}

export default Sliders