import React, { useEffect, useState } from "react";
import "./Search.css";
import slide2 from "../../img/banerr.svg";
import Select from "../UI/Select/Select";
import { useSelector } from "react-redux";
import { GoArrowSwitch } from "react-icons/go";
import { BiSolidDownArrow } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import url from "../../Api";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const Search = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  const { t } = useTranslation();
  const [from, setFrom] = useState({
    select: false,
    value: "",
    sign: "",
  });
  const [where, setWhere] = useState({
    select: false,
    value: "",
    sign: "",
  });
  const [person, setPerson] = useState({
    pass: false,
    ArrayAdults: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    adults: 1,
    ArrayChild: [t("no"), 1, 2],
    child: "Нет",
    ArrayBaby: [t("no"), 1],
    baby: "Нет",
  });
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
  const [date, setDate] = useState({
    dateTo: formattedDate,
    dateFrom: "",
  });
  const { picker } = useSelector((state) => state.picker);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState([]);
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    axios
      .get(url + "/avia/flight/params/")
      .then((response) => {
        const allCities = response.data.countries.reduce((acc, country) => {
          const citiesWithCountry = country.cities.map((city) => ({
            ...city,
            country: country.name,
          }));
          return [...acc, ...citiesWithCountry];
        }, []);
        setData(allCities);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios.get(url + `/main/banner/${lang}/`).then((response) => {
      setBanner(response.data);
    }, []);
  }, []);

  // useEffect(() => {
  //   if (from.select === false) {
  //     if (from.value === "") {
  //       const items = data.filter((obj) => obj.name !== where.value);
  //       setFrom({
  //         ...from,
  //         value: `${items.name}`,
  //         sign: `${items.code_name}`,
  //       });
  //     }
  //   }
  //   if (from.select === false) {
  //     if (
  //       data.filter((obj) =>
  //         obj.name.toLowerCase().includes(from.value.toLowerCase())
  //       ).length === 0
  //     ) {
  //       setFrom({
  //         ...from,
  //         value: `${data.name}`,
  //         sign: `${data.code_name}`,
  //       });
  //     }
  //   }
  //   if (from.value === where.value) {
  //     const items = data.filter((obj) => obj.name !== from.value);
  //     setWhere({ ...where, value: items.name, sign: `${items.code_name}` });
  //   }
  // }, [from]);

  // useEffect(() => {
  //   if (where.select === false) {
  //     if (where.value === "") {
  //       setWhere({
  //         ...where,
  //         value: `${data[1].name}`,
  //         sign: `${data[1].code}`,
  //       });
  //     }
  //   }
  //   if (where.select === false) {
  //     if (
  //       data.filter((obj) =>
  //         obj.name.toLowerCase().includes(where.value.toLowerCase())
  //       ).length === 0
  //     ) {
  //       setWhere({
  //         ...where,
  //         value: `${data[1].name}`,
  //         sign: `${data[1].code}`,
  //       });
  //     }
  //   }
  //   if (from.value === where.value) {
  //     const items = data.filter((obj) => obj.name !== from.value);
  //     setWhere({ ...where, value: items[0].name, sign: `${items[0].code}` });
  //   }
  // }, [where]);

  useEffect(() => {
    if (picker) {
      setWhere({ ...where, value: picker });
    }
  }, [picker]);

  function changes() {
    setWhere({ ...where, value: from.value, sign: from.sign });
    setFrom({ ...from, value: where.value, sign: where.sign });
  }

  function formattedDates(dateString) {
    const parts = dateString.split("-");
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }

  const childrens = person.child !== "Нет" ? person.child : 0;

  const babys = person.baby !== "Нет" ? person.baby : 0;

  const persons = person.adults + childrens + babys;

  const valuePersons =
    persons == 1
      ? `${persons} ${t("passenger")}`
      : persons < 5
      ? `${persons} ${t("passenger1")}`
      : `${persons} ${t("passenger2")}`;

  const fromURL = from.sign && `/${from.sign}`;
  const whereURL = where.sign && `/${where.sign}`;
  const dateToURL = date.dateTo && `/${formattedDates(date.dateTo)}`;
  const dateFromURL = date.dateFrom && `+${formattedDates(date.dateFrom)}`;
  const personURL = `/${person.adults}-${
    person.child === "Нет" ? 0 : person.child
  }-${person.baby === "Нет" ? 0 : person.baby}`;

  const searchData = `https://booking.skyfru.kg/!${fromURL}${whereURL}${dateToURL}${dateFromURL}${personURL}`;

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="search">
        <div className="menu_search">
          <h2 className="search_title">Бронирование авиабилетов - SkyFru</h2>
        </div>
        <div className="slider_slick">
          <Slider {...settings}>
            {banner.map((item) => (
              
              <img className="img_slider-search" src={item.img} alt="" />
            ))}
          </Slider>
        </div>
        <div className="container">
          <div className="search_block">
            <div className="search_div">
              <div className="search_out">
                <div className="search_div_in">
                  <div style={{ width: "100%" }}>
                    <label className="label_form">{t("from")}</label>
                    <div className="relative_in">
                      <input
                        onClick={() => {
                          setFrom({ ...from, select: true, value: "" });
                          setWhere({ ...where, select: false });
                        }}
                        value={from.value}
                        onChange={(e) =>
                          setFrom({ ...from, value: e.target.value })
                        }
                        className="border1"
                        type="text"
                        placeholder={`${t("from")}?`}
                      />
                      <p
                        onClick={() => {
                          setFrom({ ...from, select: true, value: "" });
                          setWhere({ ...where, select: false });
                        }}
                        className="gray_ab"
                      >
                        {from.sign}
                        <BiSolidDownArrow className="icon" />
                      </p>
                    </div>
                  </div>
                  <button onClick={changes} className="arrow">
                    <GoArrowSwitch className="icons" />
                  </button>
                  <div style={{ width: "100%" }}>
                    <label className="label_form">{t("from1")}</label>
                    <div className="relative_in">
                      <input
                        onClick={() => {
                          setWhere({ ...where, select: true, value: "" });
                          setFrom({ ...from, select: false });
                        }}
                        value={where.value}
                        onChange={(e) =>
                          setWhere({ ...where, value: e.target.value })
                        }
                        type="text"
                        placeholder={`${t("from1")}?`}
                      />
                      <p
                        onClick={() => {
                          setWhere({ ...where, select: true, value: "" });
                          setFrom({ ...from, select: false });
                        }}
                        className="gray_ab"
                      >
                        {where.sign}
                        <BiSolidDownArrow className="icon" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {from.select && (
                    <Select
                      open={from}
                      close={setFrom}
                      value={from.value}
                      item={data}
                    />
                  )}
                  {where.select && (
                    <Select
                      open={where}
                      close={setWhere}
                      value={where.value}
                      item={data}
                      where={from.value}
                    />
                  )}
                </div>
              </div>
              <div className="grid">
                <div>
                  <label className="label_form">{t("from2")}</label>
                  <input
                    value={date.dateTo}
                    onChange={(e) =>
                      setDate({ ...date, dateTo: e.target.value })
                    }
                    type="date"
                  />
                </div>
                <div>
                  <label className="label_form">{t("from3")}</label>
                  <input
                    value={date.dateFrom}
                    onChange={(e) =>
                      setDate({ ...date, dateFrom: e.target.value })
                    }
                    type="date"
                  />
                </div>
              </div>
              <div style={{ width: "100%" }} className="relative_pass_div">
                <div style={{ width: "100%" }}>
                  <label className="label_form">{t("from4")}</label>
                  <div className="relative_in">
                    <input
                      value={valuePersons}
                      onClick={() => setPerson({ ...person, pass: true })}
                      className="border2"
                      type="text"
                    />
                    <BiSolidDownArrow
                      className={`icon_arrow ${person.pass && "active"}`}
                    />
                  </div>
                </div>
                <div className="relative_pass">
                  {person.pass && (
                    <div className="absolute_pass">
                      <div className="box_deg"></div>
                      <GrClose
                        onClick={() => setPerson({ ...person, pass: false })}
                        className="closes"
                      />
                      <p className="name">{t("passenger3")}</p>
                      <div className="array">
                        {person.ArrayAdults.map((el) => (
                          <div
                            onClick={() => setPerson({ ...person, adults: el })}
                            className={`array_box ${
                              el === person.adults && "active"
                            }`}
                          >
                            {el}
                          </div>
                        ))}
                      </div>
                      <p className="name">
                        {t("passenger4")} <span>{t("passenger5")}</span>
                      </p>
                      <div className="array">
                        {person.ArrayChild.map((el) => (
                          <div
                            onClick={() => setPerson({ ...person, child: el })}
                            className={`array_box ${
                              el === person.child && "active"
                            }`}
                          >
                            {el}
                          </div>
                        ))}
                      </div>
                      <p className="name">
                        {t("passenger6")} <span>{t("passenger7")}</span>
                      </p>
                      <div className="array">
                        {person.ArrayBaby.map((el) => (
                          <div
                            onClick={() => setPerson({ ...person, baby: el })}
                            className={`array_box ${
                              el === person.baby && "active"
                            }`}
                          >
                            {el}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <a className="as" href={searchData}>
              <div className="btn_box">
                <button className="buttons">{t("from5")}</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      {where.select && (
        <div
          onClick={() =>
            setWhere({
              ...where,
              select: false,
            })
          }
          className="not_found_data"
        ></div>
      )}
      {from.select && (
        <div
          onClick={() =>
            setFrom({
              ...from,
              select: false,
            })
          }
          className="not_found_data"
        ></div>
      )}
      {person.pass && (
        <div
          onClick={() =>
            setPerson({
              ...person,
              pass: false,
            })
          }
          className="not_found_data"
        ></div>
      )}
    </>
  );
};

export default Search;
