import React from "react";
import "./Payment.css";
import logo1 from "../../img/Visa_2021.svg.png";
import logo2 from "../../img/image 6.svg";
import logo3 from "../../img/uniteller.png";
import { useTranslation } from "react-i18next";

const We = () => {
  const { t } = useTranslation();
  return (
    <div className="icons_componi">
      <div className="container">
        <h2>{t("accept")}</h2>
        <div className="contant">
          <div className="slide_image r">
            <img src={logo1} alt="" />
          </div>
          {/* <div className="slide_image">
            <img src={logo3} alt="" />
          </div> */}
          <div className="slide_image">
            <img src={logo2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default We;
