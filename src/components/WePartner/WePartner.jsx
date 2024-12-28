import React, { useEffect, useState } from "react";
import "./WePartner.css";
import Slider from "react-slick";
import axios from "axios";
import url from "../../Api";
import { useTranslation } from "react-i18next";

const WePartner = () => {
  const [iconData, setIconData] = useState([]);
  const { t } = useTranslation();

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
    <div className="we_partner">
      <div className="container">
        <h2>{t("our")}</h2>
        <Slider {...settings} className="slide_block">
          {iconData.map((el) => (
            <div>
              <div className="slide_image">
                <div className="img">
                  <img src={el.logo} alt="" />
                </div>
                <span className="title">{el.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WePartner;
