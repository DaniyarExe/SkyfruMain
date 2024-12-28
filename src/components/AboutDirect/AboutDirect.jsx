import React, { useEffect, useState } from "react";
import "./AboutDirect.css";
import axios from "axios";
import url from "../../Api";
import { linkAction } from "../../store/reducers/picker";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const AboutDirect = () => {
  const { t } = useTranslation();
  const [direct, setDirect] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url + "/main/popular-dest/")
      .then((response) => {
        setDirect(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function pickerFunc(item) {
    dispatch(linkAction(item));
  }

  return (
    <div className="about_direct">
      <div className="container">
        <h2>{t("directions")}:</h2>
        <div className="directions_contant">
          {direct.map((el) => (
            <div onClick={() => pickerFunc(el.name)} className="directions_box">
              <img src={el.img} alt="" />
              <div className="city">{el.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDirect;
