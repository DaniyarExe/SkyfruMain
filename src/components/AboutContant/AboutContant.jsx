import React from "react";
import "./AboutContant.css";
import about_img from "../../img/real-photo.jpg";
import { useTranslation } from "react-i18next";

const AboutContant = () => {
  const { t } = useTranslation();
  return (
    <div className="about_contant">
      <div className="container">
        <div className="contant">
          <h2 className="block">О нас</h2>
          <img src={about_img} alt="" />
          <div>
            <h2 className="none">{t("about")}</h2>
            <p>{t("aboutText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContant;
