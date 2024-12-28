import React, { useEffect, useState } from "react";
import "./Directions.css";
import arrow from "../../img/arrow_direct.svg";
import { NavLink } from "react-router-dom";
import url from "../../Api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { linkAction } from "../../store/reducers/picker";
import { useTranslation } from "react-i18next";

const Directions = () => {
  const { t } = useTranslation();
  const [direct, setDirect] = useState([]);
  const dispatch = useDispatch();
  const [currentLang, setCurrentLang] = useState("en");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const lang = localStorage.getItem("lang") || "ru";

  useEffect(() => {
    const fetchLangAndDestinations = async () => {
      try {
        const destResponse = await axios.get(url + `/main/v2/popular-dest/${lang}`);
        setDirect(destResponse.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchLangAndDestinations();
  }, []);

  function pickerFunc(item) {
    dispatch(linkAction(item));
  }

  return (
    <div className="directions">
      <div className="container">
        <div className="current_head">
          <h2>{t("popular")}</h2>
        </div>
        <div className="directions_contant">
          {direct
            .slice(0, 4)
            .map((el, index) => (
              <div
                key={index}
                onClick={() => pickerFunc(el.name)}
                className="directions_box"
              >
                <img src={el.img} alt={el.name} />
                <div className="city">{el.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Directions;
