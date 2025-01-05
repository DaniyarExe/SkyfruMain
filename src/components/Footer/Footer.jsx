import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/facebook.svg";
import logo from "../../img/Group 3.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang") || "ru";

  return (
    <div className="body_footer">
      <div className="footer">
        <div className="container">
          <div className="foot">
            <div>
              <NavLink
                to="/"
                className="logo"
                style={{ color: "var(--orange)" }}
              >
                <img className="logo_image" src={logo} alt="" />
              </NavLink>
              <p>{t("key1")}</p>
              <div className="icons">
                <div className="icon">
                  <img src={facebook} alt="" />
                </div>
                <a
                  href="https://www.instagram.com/skyfrukg?igsh=dm82bTRkbnVmb2Yw"
                  target="_blank"
                >
                  <div className="icon">
                    <img src={instagram} alt="" />
                  </div>
                </a>
                <div className="icon">
                  <FaTelegramPlane color="var(--orange)" size={22} />
                </div>
                <a href="https://wa.me/+996222911771" target="_blank">
                  <div className="icon">
                    <FaWhatsapp color="var(--orange)" size={22} />
                  </div>
                </a>
              </div>
            </div>
            <div className="foot_div">
              <h4 style={{ color: "var(--orange)" }}>{t("key3")}</h4>
              <NavLink to={`/${lang}/privacy-policy`} className="foot_text">
                {t("key")}
              </NavLink>
              <NavLink to="" className="foot_text">
                {t("key1")}
              </NavLink>
              <NavLink to="" className="foot_text">
                {t("key2")}
              </NavLink>
              <NavLink to={`/${lang}/about`} className="foot_text">
                {t("key3")}
              </NavLink>
              <NavLink to={`/${lang}/contact`} className="foot_text">
                {t("key4")}
              </NavLink>
            </div>
            <div className="foot_div">
              <h4 style={{ color: "var(--orange)" }}>{t("key4")}</h4>
              <a href="tel:+996312911771">
                <p>+996 (312) 91 17 71</p>
              </a>
              <a href="tel:+996222911771">
                <p>+996 (222) 91 17 71</p>
              </a>
              <a href="mailto:comm@skyfru.kg">
                <p>com@skyfru.kg</p>
              </a>
              <p>{t("fotr")}</p>
              <p>{t("fotr1")}</p>
            </div>
          </div>
        </div>
        <div className="container footer-flex">
          <p className="all">{t("fotr2")}</p>
          <p className="all">Made with ✈️ by <a href="https://t.me/navisdevs"
              target="_blank"
              className="navis-dev"
            >
              NavisDevs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
