import React, { useEffect, useState } from "react";
import "./AllNews.css";
import axios from "axios";
import url from "../../Api";
import { useNavigate } from "react-router-dom";
import arrow from "../../img/arrow_direct_white.svg";

const AllNews = () => {
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
    <div className="all_news">
      <div className="container">
        <div className="contant">
          {news.map((el) => (
            <div
              onClick={() => navigate(`/info-page/news/${el.slug}`)}
              className="all_news_block"
            >
              <img className="image" src={el.img} alt="" />
              <span className="title">{el.title}</span>
              <p>{String(el.description).replace(/<[^>]*>?/gm, "")}</p>
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

export default AllNews;
