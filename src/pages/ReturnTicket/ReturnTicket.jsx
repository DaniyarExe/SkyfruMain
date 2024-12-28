import React, { useEffect, useState } from "react";
import "./ReturnTicket.css";
import { useNavigate } from "react-router-dom";
import url from "../../Api";
import axios from "axios";
import Loading from "../../components/UI/Loading/Loading";
import empty from "../../img/placeholder.png";
import { useTranslation } from "react-i18next";
import i18n from "../../components/i18next/i18next";

const ReturnTicket = () => {
  const { t } = useTranslation();
  const [formatedDate, setFormattedDate] = useState('');
  const [inputData, setInputData] = useState({
    full_name: "",
    passport: "",
    issuet: "",
    data_booking: "",
    route: "",
    ticket_number: "",
    date_from: "",
    full_name_passage: "",
    phone: "",
    date_today: "",
    they_commit: "",
    frontPassportImage: null,
    backPassportImage: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    setInputData({ ...inputData, date_today: formattedDate });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.frontPassportImage || !inputData.backPassportImage) {
      alert("Фото паспорта обязательно");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("full_name", inputData.full_name);
      formData.append("passport", inputData.passport);
      formData.append("issuet", inputData.issuet);
      formData.append("data_booking", inputData.data_booking);
      formData.append("route", inputData.route);
      formData.append("ticket_number", inputData.ticket_number);
      formData.append("date_from", inputData.date_from);
      formData.append("full_name_passage", inputData.full_name_passage);
      formData.append("phone", inputData.phone);
      formData.append("date_today", inputData.date_today);
      formData.append("they_commit", inputData.they_commit);
      formData.append("front_passport_image", inputData.frontPassportImage);
      formData.append("back_passport_image", inputData.backPassportImage);

      const response = await axios.post(
        url + "/main/cancel-booking",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.data.response === true) {
        navigate("/kg");
        alert("Успешно!!");
        setInputData({
          ...inputData,
          full_name: "",
          passport: "",
          issuet: "",
          data_booking: "",
          route: "",
          ticket_number: "",
          date_from: "",
          full_name_passage: "",
          phone: "",
          date_today: "",
          they_commit: "",
          frontPassportImage: null,
          backPassportImage: null,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFrontPassportImageChange = (e) => {
    setInputData({
      ...inputData,
      frontPassportImage: e.target.files[0],
    });
  };

  const handleBackPassportImageChange = (e) => {
    setInputData({
      ...inputData,
      backPassportImage: e.target.files[0],
    });
  };


  const handleFrontPassportImageClick = () => {
    document.getElementById("frontPassportImageInput").click();
  };

  const handleBackPassportImageClick = () => {
    document.getElementById("backPassportImageInput").click();
  };

  return (
    <div className="return_ticket">
      <div className="login_form">
        <div className="login_form_body">
          <h2 style={{ textAlign: "center" }}>
            {t("declarationMain")}
          </h2>
          <p className="medium">
            {t("declarationInfo")}
          </p>
          <p>
          {t("declarationSideInfo")}
          </p>
          <form onSubmit={handleSubmit} className="register_grid">
            <div className="input_box">
              <label className="label_form">{t("declarationName")}</label>
              <input
                className="input_form"
                type="text"
                value={inputData.full_name}
                onChange={handleChange}
                name="full_name"
                placeholder=""
                required
              />
              <small>
              {t("declarationNameInfo")}
              </small>
            </div>
            <div className="input_box">
              <label className="label_form">{t("declarationPassport")}</label>
              <input
                className="input_form"
                type="text"
                value={inputData.passport}
                onChange={handleChange}
                name="passport"
                placeholder=""
                required
              />
              <small>{t("declarationPassportInfo")}</small>
            </div>
            <div className="input_box">
              <label className="label_form">{t("declarationIssued")}</label>
              <input
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.issuet}
                onChange={handleChange}
                name="issuet"
                required
              />
              <small>{t("declarationIssuedInfo")}</small>
            </div>
            <p>
            {t("declarationDeal")}
            </p>
            <h2 style={{ margin: "25px auto", textAlign: "center" }}>
            {t("Order")}{" "}
            </h2>
            <div className="input_box">
              <label className="label_form">{t("OrderInfo")}</label>
              <input
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.data_booking}
                onChange={handleChange}
                name="data_booking"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">{t("OrderInfo")}</label>
              <input
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.route}
                onChange={handleChange}
                name="route"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">{t("OrderNumber")}</label>
              <input
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.ticket_number}
                onChange={handleChange}
                name="ticket_number"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">{t("OrderDeparture")}</label>
              <input
                className="input_form"
                type="date"
                placeholder={t("OrderDate")}
                value={inputData.date_from}
                onChange={handleChange}
                name="date_from"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">{t("OrderPassagerName")}</label>
              <textarea
                style={{ minHeight: 100 }}
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.full_name_passage}
                onChange={handleChange}
                name="full_name_passage"
                required
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: t("OrderPayment") }} />
            <div style={{ marginTop: 20 }} className="input_box">
              <label className="label_form">{t("OrderPhone")}</label>
              <input
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.phone}
                onChange={handleChange}
                name="phone"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">{t("OrderDataInfo")}</label>
              <input
                className="input_form"
                type="date"
                placeholder=""
                value={inputData.date_today}
                onChange={handleChange}
                disabled={true}
                name="date_today"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">{t("OrderComments")}</label>
              <textarea
                style={{ minHeight: 100 }}
                className="input_form"
                type="text"
                placeholder=""
                value={inputData.they_commit}
                onChange={handleChange}
                name="they_commit"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">
                {t("OrderPassportFront")}
              </label>
              <img
                src={
                  inputData.frontPassportImage
                    ? URL.createObjectURL(inputData.frontPassportImage)
                    : empty
                }
                alt="Front Passport"
                className="passport_image"
                onClick={handleFrontPassportImageClick}
              />
              <input
                id="frontPassportImageInput"
                type="file"
                accept="image/*"
                onChange={handleFrontPassportImageChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="input_box">
              <label className="label_form">
              {t("OrderPassportBack")}
              </label>
              <img
                src={
                  inputData.backPassportImage
                    ? URL.createObjectURL(inputData.backPassportImage)
                    : empty
                }
                alt="Back Passport"
                className="passport_image"
                onClick={handleBackPassportImageClick}
              />
              <input
                id="backPassportImageInput"
                type="file"
                accept="image/*"
                onChange={handleBackPassportImageChange}
                style={{ display: "none" }}
              />
            </div>
            <button
              style={{ margin: "20px 0 0 0" }}
              disabled={loading}
              className="button_form"
              onSubmit={handleSubmit}
            >
              {loading ? <Loading color={"#fff"} /> : t("SendBtn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReturnTicket;
