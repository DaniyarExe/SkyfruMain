import React, { useEffect, useState } from "react";
import "./IconsComponi.css";
import Slider from "react-slick";
import axios from "axios";
import url from "../../Api";

const IconsComponi = () => {
  const [iconData, setIconData] = useState([]);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(url + "/main/partners/")
      .then((response) => {
        setIconData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="icons_componi">
      <div className="container">
        <Slider {...settings}>
          {iconData?.map((el, index) => (
            <div key={index} className="slide_image">
              <img src={el.logo} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default IconsComponi;
