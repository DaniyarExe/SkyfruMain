import React, { useEffect, useState } from "react";
import "./NewsCompony.css";
import axios from "axios";
import url from "../../Api";
import arrow from "../../img/arrow_direct_white.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsCompony = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    axios
      .get(url + `/main/v2/news/${lang}`)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log("news:", error);
      });
  }, []);

  return (
    <div className="news_compony">
      <div className="container">
        <div className="current_head">
          <h2>{t("news")}</h2>
          <NavLink to={`/${lang}/all-news`} className="direct disabled-none">
            {t("all")} <span>{t("allnews")}</span> <img src={arrow} alt="" />
          </NavLink>
          <NavLink to={`/${lang}/all-news`} className="arrow-news">
            <img src={arrow} alt="" />
          </NavLink>
        </div>
        <div className="contant">
          {news.map((el, index) => (
            <div
              key={index}
              onClick={() => navigate(`/${lang}/info-page/news/${el.slug}`)}
              className="news_compony_block"
            >
              <img className="image" src={el.img} alt="" />
              <span className="title">{el.title}</span>
              {React.createElement("p", {
                dangerouslySetInnerHTML: {
                  __html: el.description ? el.description : "",
                },
              })}
              <div className="flex">
                <span className="date">{el.date}</span>
                <img src={arrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCompony;
