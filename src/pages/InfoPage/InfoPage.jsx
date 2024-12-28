import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import { NavLink, useParams } from "react-router-dom";
import arrow_down from "../../img/arrow_down.svg";
import arrow_up from "../../img/arrow_up.svg";
import arrow_whihe from "../../img/arrow_direct_white.svg";
import axios from "axios";
import url from "../../Api";
import ReturnTicket from "../ReturnTicket/ReturnTicket";

const Infor = ({ el }) => {
  const [trip, setTrip] = useState(false);

  return (
    <>
      <div onClick={() => setTrip(!trip)} className="drop_trip">
        {el.name}
        {trip ? <img src={arrow_up} alt="" /> : <img src={arrow_down} alt="" />}
      </div>
      {trip &&
        el.info &&
        el.info.map((item) => (
          <div className="drop">
            <NavLink to={`/info-page/${item.slug}`} className="drop_contant">
              {item.name} <img src={arrow_whihe} alt="" />{" "}
            </NavLink>
          </div>
        ))}
    </>
  );
};

const InfoPage = () => {
  const [detail, setDetail] = useState([]);
  const [params, setParams] = useState([]);
  const { news, info } = useParams();
  const lang = localStorage.getItem("lang") || "ru";

  console.log(info);

  useEffect(() => {
    document.title = detail.name;
    const descriptionMetaTag = document.querySelector(
      'meta[name="description"]'
    );
    if (descriptionMetaTag) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = detail.description;
      const plainDescription = tempElement.textContent || tempElement.innerText;
      descriptionMetaTag.setAttribute("content", plainDescription);
    }
  }, [detail]);

  useEffect(() => {
    if (info) {
      axios
        .get(url + `/main/${news === "news" ? "news" : "info"}/${info}`)
        .then((response) => {
          setDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [info, news]);

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

  return (
    <div className="info_page">
      {info === "dog"}
      <div className="container">
        <img
          style={{ marginTop: 20 }}
          className="image"
          src={detail.img}
          alt={detail.title}
        />
        <div className="contant">
          <div className="width">
            <h2>{detail.name}</h2>
            {React.createElement("p", {
              dangerouslySetInnerHTML: {
                __html: detail.description ? detail.description : "",
              },
            })}
          </div>
          <div className="drop_down">
            {params &&
              params[1] &&
              params[1].subcat.map((el) => (
                <>
                  <Infor el={el} />
                </>
              ))}
          </div>
          {["politika-vozvratov", "refund-policy", "kajtaruu-sajasaty"].includes(info) && <ReturnTicket />}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
