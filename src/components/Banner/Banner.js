import React from "react";
import Slider from "react-slick";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-9">
      <Slider {...settings}>
          <div>
            <img src={banner1} alt="" banner />
          </div>
          <div>
            <img src={banner2} alt="" banner />
          </div>
          <div>
            <img src={banner3} alt="" banner />
          </div>
      </Slider>
    </div>
  );
};

export default Banner;
