import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import url from "../../Api";
import logo from "../../img/Group 2.svg";
import i18n from "../i18next/i18next";
import russia from "../../img/Flag_of_Russia.svg.png";
import kyrgiystan from "../../img/flag_kg.svg.png";
import kingdom from "../../img/Flag_of_the_United_Kingdom_(1-2).svg.png";
import { useTranslation } from "react-i18next";

const Header = ({ local }) => {
  const { t } = useTranslation();
  const [booking, setBooking] = useState(false);
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  const [menu, setMenu] = useState(false);
  const [bookingMenu, setBookingMenu] = useState(false);
  const [infoMenu, setInfoMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [params, setParams] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const lang = localStorage.getItem("lang") || "ru";
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  function close() {
    setBooking(false);
    setInfo(false);
    setAbout(false);
  }

  useEffect(() => {
    close();
  }, []);

  useEffect(() => {
    axios
      .get(url + `/main/v2/info/params/${lang}`)
      .then((response) => {
        setParams(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lang]);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
    setIsLangDropdownOpen(false);
  };

  return (
    <>
      <div className="header"></div>
      <div className="header_fixet">
        <div className="container one">
          <div className="head">
            {(booking && <div onClick={close} className="fixet"></div>) ||
              (info && <div onClick={close} className="fixet"></div>) ||
              (about && <div onClick={close} className="fixet"></div>)}
            <div className="pages_head">
              <NavLink to={`${lang}/`} className="logo">
                <img className="logo_image" src={logo} alt="" />
              </NavLink>
            </div>
            <div
              onMouseLeave={() =>
                setBooking(false) || setInfo(false) || setAbout(false)
              }
              className="head_relative"
            >
              <div className="pages_head">
                <div
                  onMouseEnter={() =>
                    setBooking(true) || setInfo(false) || setAbout(false)
                  }
                  className="page open1"
                >
                  {t("header")}
                </div>
                {booking && (
                  <div
                    onMouseEnter={() =>
                      setBooking(true) || setInfo(false) || setAbout(false)
                    }
                    onMouseLeave={() =>
                      setBooking(false) || setInfo(false) || setAbout(false)
                    }
                    className="menu close1"
                  >
                    {params[0]?.subcat?.map((el) => (
                      <div className="menu_one" key={el.id}>
                        <div className="page_menu_div">{el.name}</div>
                        {el.info.map((item) => (
                          <NavLink
                            to={
                              item?.url
                                ? item?.url
                                : `/${lang}/info-page/${item.slug}`
                            }
                            target="_blank"
                            className="page_menu"
                            key={item.id}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="pages_head">
                <div
                  onMouseEnter={() =>
                    setInfo(true) || setBooking(false) || setAbout(false)
                  }
                  className="page"
                >
                  {t("header1")}
                </div>
                {info && (
                  <div
                    onMouseEnter={() =>
                      setInfo(true) || setBooking(false) || setAbout(false)
                    }
                    onMouseLeave={() =>
                      setInfo(false) || setBooking(false) || setAbout(false)
                    }
                    className="menu info"
                  >
                    {params[1]?.subcat?.map((el) => (
                      <div className="menu_two">
                        <div className="page_menu_div">{el.name}</div>
                        {el.info.map((item) => (
                          <NavLink
                            to={`/${lang}/info-page/${item.slug}`}
                            className="page_menu"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* <div className="pages">
                <div
                  onMouseEnter={() =>
                    setAbout(true) || setInfo(false) || setBooking(false)
                  }
                  className="page"
                >
                  О компании
                </div>
                {about && (
                  <div
                    onMouseEnter={() =>
                      setAbout(true) || setInfo(false) || setBooking(false)
                    }
                    onMouseLeave={() =>
                      setAbout(false) || setInfo(false) || setBooking(false)
                    }
                    className="menu d"
                  >
                    <div className="menu_one">
                      <div className="page_menu_div">О компании</div>
                      <NavLink to="/about" className="page_menu">
                        О нас
                      </NavLink>
                      <NavLink to="/about" className="page_menu">
                        Наши партнеры
                      </NavLink>
                      <NavLink to="" className="page_menu">
                        Новости
                      </NavLink>
                    </div>
                  </div>
                )}
              </div> */}
              <div className="pages_head">
                <NavLink
                  to={`/${lang}/about`}
                  className="page"
                  onMouseEnter={() =>
                    setBooking(false) || setInfo(false) || setAbout(false)
                  }
                  onClick={() =>
                    setInfo(false) || setBooking(false) || setAbout(false)
                  }
                >
                  {t("header2")}
                </NavLink>
              </div>{" "}
              <div className="pages_head">
                <NavLink
                  to={`/${lang}/contact`}
                  className="page"
                  onMouseEnter={() =>
                    setBooking(false) || setInfo(false) || setAbout(false)
                  }
                  onClick={() =>
                    setInfo(false) || setBooking(false) || setAbout(false)
                  }
                >
                  {t("header3")}
                </NavLink>
              </div>
              {/* {local ? (
                <div className="login">
                  <div className="pages_head">
                    <NavLink
                      to="/dashboard"
                      className="pagereg"
                      onClick={() =>
                        setInfo(false) || setBooking(false) || setAbout(false)
                      }
                    >
                      {" "}
                      <img className="profile_image" src={profile} alt="" />
                    </NavLink>
                  </div>
                </div>
              ) : (
                <>
                  <div className="login">
                    <a
                      href="https://booking.skyfru.kg/registration/"
                      className="register"
                    >
                      Регистрация
                    </a>
                  </div>
                </>
              )} */}
              <div className="login relative">
                <div className="i18n d-flex">
                  <div
                    className="active-lang"
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  >
                    <img
                      className="flag-kg"
                      src={
                        lang === "ru"
                          ? russia
                          : lang === "kg"
                          ? kyrgiystan
                          : kingdom
                      }
                      alt={lang}
                    />
                    <button className={lang === "ru" ? "activeKG" : ""}>
                      {lang.toUpperCase()}
                    </button>
                    <IoIosArrowDown color="rgba(111, 111, 111, 1)" size={19} />
                  </div>
                  {isLangDropdownOpen && (
                    <div className="active-lang-position show">
                      {lang !== "ru" && (
                        <a
                          href="/ru"
                          style={{ textDecoration: "none" }}
                          onClick={() => handleLanguageChange("ru")}
                        >
                          <div className="dropdown-item">
                            <img className="flag-kg" src={russia} alt="ru" />
                            <button>RU</button>
                          </div>
                        </a>
                      )}
                      {lang !== "kg" && (
                        <a
                          href="/kg"
                          style={{ textDecoration: "none" }}
                          onClick={() => handleLanguageChange("kg")}
                        >
                          <div className="dropdown-item">
                            <img
                              className="flag-kg"
                              src={kyrgiystan}
                              alt="kg"
                            />
                            <button>KG</button>
                          </div>
                        </a>
                      )}
                      {lang !== "en" && (
                        <a
                          href="/en"
                          style={{ textDecoration: "none" }}
                          onClick={() => handleLanguageChange("en")}
                        >
                          <div className="dropdown-item">
                            <img className="flag-kg" src={kingdom} alt="en" />
                            <button>EN</button>
                          </div>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <a
                  href="https://booking.skyfru.kg/registration/"
                  className="register"
                >
                  {t("register")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container two">
          <div className="container two">
            <div onClick={() => setMenu(true)} className="burger">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <NavLink to="/" className="title_burger">
              <img className="logo_image_menu" src={logo} alt="" />
            </NavLink>
          </div>
          {/* {local ? (
            <NavLink
              to="/dashboard"
              className="pagereg"
              onClick={() =>
                setInfo(false) || setBooking(false) || setAbout(false)
              }
            >
              {" "}
              <img className="profile_image" src={profile} alt="" />
            </NavLink>
          ) : (
            <a
              className="register"
              href="https://booking.skyfru.kg/registration/"
            >
              Регистрация
            </a>
          )} */}
          <div className="i18n d-flex">
            <div
              className="active-lang"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <button className={lang === "ru" ? "activeKG" : ""}>
                {lang.toUpperCase()}
              </button>
              <IoIosArrowDown color="rgba(111, 111, 111, 1)" size={19} />
            </div>
            {isLangDropdownOpen && (
              <div className="active-lang-position show">
                {lang !== "ru" && (
                  <a
                    href="/ru"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleLanguageChange("ru")}
                  >
                    <div className="dropdown-item">
                      <button>RU</button>
                    </div>
                  </a>
                )}
                {lang !== "kg" && (
                  <a
                    href="/kg"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleLanguageChange("kg")}
                  >
                    <div className="dropdown-item">
                      <button>KG</button>
                    </div>
                  </a>
                )}
                {lang !== "en" && (
                  <a
                    href="/en"
                    style={{ textDecoration: "none" }}
                    onClick={() => handleLanguageChange("en")}
                  >
                    <div className="dropdown-item">
                      <button>EN</button>
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>
          <a
            className="register"
            href="https://booking.skyfru.kg/registration/"
          >
            {t("register")}
          </a>
        </div>
        {menu && (
          <div className="menu_modal">
            <div onClick={() => setMenu(false)} className="menu_not"></div>
            <div className="menu_container">
              <MdClose onClick={() => setMenu(false)} className="close" />
              <p
                onClick={() =>
                  setBookingMenu(!bookingMenu) ||
                  setAboutMenu(false) ||
                  setInfoMenu(false)
                }
                className={bookingMenu ? "menu_link active" : "menu_link"}
              >
                {t("header")}
                {bookingMenu ? (
                  <IoIosArrowUp className="menu_open_icon" />
                ) : (
                  <IoIosArrowDown className="menu_close_icon" />
                )}
              </p>
              {bookingMenu && (
                <div
                  onMouseEnter={() =>
                    setBooking(true) || setInfo(false) || setAbout(false)
                  }
                  onMouseLeave={() =>
                    setBooking(false) || setInfo(false) || setAbout(false)
                  }
                >
                  <div className="menu_group">
                    {params[0]?.subcat?.map((el) => (
                      <div>
                        <div className="menu_big">{el.name}</div>
                        {el.info.map((item) => (
                          <NavLink
                            to={
                              item?.url
                                ? item?.url
                                : `/${lang}/info-page/${item.slug}`
                            }
                            className="menu_small"
                            onClick={() => setMenu(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <p
                onClick={() =>
                  setInfoMenu(!infoMenu) ||
                  setBookingMenu(false) ||
                  setAboutMenu(false)
                }
                className={infoMenu ? "menu_link active" : "menu_link"}
              >
                {t("header1")}
                {infoMenu ? (
                  <IoIosArrowUp className="menu_open_icon" />
                ) : (
                  <IoIosArrowDown className="menu_close_icon" />
                )}
              </p>
              {infoMenu && (
                <div
                  onMouseEnter={() =>
                    setInfo(true) || setBooking(false) || setAbout(false)
                  }
                  onMouseLeave={() =>
                    setInfo(false) || setBooking(false) || setAbout(false)
                  }
                >
                  <div className="menu_group">
                    {params[1]?.subcat?.map((el) => (
                      <div>
                        <div className="menu_big">{el.name}</div>
                        {el.info.map((item) => (
                          <NavLink
                            to={`/${lang}/info-page/${item.slug}`}
                            className="menu_small"
                            onClick={() => setMenu(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* <p
                onClick={() =>
                  setAboutMenu(!aboutMenu) ||
                  setInfoMenu(false) ||
                  setBookingMenu(false)
                }
                className={aboutMenu ? "menu_link active" : "menu_link"}
              >
                О компании{" "}
                {aboutMenu ? (
                  <IoIosArrowUp className="menu_open_icon" />
                ) : (
                  <IoIosArrowDown className="menu_close_icon" />
                )}
              </p>
              {aboutMenu && (
                <div className="menu_group">
                  <p className="menu_big">О компании</p>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/about"
                    className="menu_small"
                  >
                    О нас
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to="/about"
                    className="menu_small"
                  >
                    Наши партнеры
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(false)}
                    to=""
                    className="menu_small"
                  >
                    Новости
                  </NavLink>
                </div>
              )} */}
              <NavLink
                onClick={() => setMenu(false)}
                to={`/${lang}/about`}
                className="menu_link"
              >
                {t("header2")}
              </NavLink>
              <NavLink
                onClick={() => setMenu(false)}
                to={`/${lang}/contact`}
                className="menu_link"
              >
                {t("header3")}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
