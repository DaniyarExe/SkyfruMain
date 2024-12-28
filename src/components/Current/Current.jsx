import React, { useEffect, useState } from "react";
import "./Current.css";
import arrow from "../../img/arrow_direct_white.svg";
import axios from "axios";
import url from "../../Api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Current = () => {
  const { t } = useTranslation();
  const [userful, setUserful] = useState([]);
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    axios
      .get(url + `/main/v2/userful-blog/${localStorage.getItem("lang")}`)
      .then((response) => {
        setUserful(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="current">
      <div className="container">
        <h2>{t("block")}</h2>
        <div className="contant">
          <div
            onClick={() => navigate(`/${lang}/info-page/${userful?.top?.slug}`)}
            style={{
              background: `url(${userful?.top?.img}) no-repeat center / cover`,
            }}
            className="contant_block f"
          >
            <span className="title">{userful?.top?.name}</span>
            <div className="flex">
              <p>
                {userful?.top &&
                  String(userful?.top?.description).replace(/<[^>]*>?/gm, "")}
              </p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="contant_block">
            {userful?.other?.map((el, index) => (
              <div
                key={index}
                onClick={() => navigate(`/${lang}/info-page/${el.slug}`)}
                className="contant_box"
              >
                <span className="title">{el.name}</span>
                <div className="flex">
                  <p>
                    {userful?.top &&
                      String(el.description).replace(/<[^>]*>?/gm, "")}
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
