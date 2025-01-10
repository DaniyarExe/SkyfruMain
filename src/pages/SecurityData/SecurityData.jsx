import React, { useState } from "react";
import axios from "axios";
import "../SecurityData/SecurityData.css";
import url from "../../Api";
import { useTranslation } from "react-i18next";

const SecurityData = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang") || "ru";
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledSecond, setIsEnabledSecond] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    event_date: "",
    location: "",
    description: "",
    corrective_actions_description: "",
    recurrence_probability: 1,
    consequences_severity: "",
    is_confidential: false,
    contact_permission: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const toggleSwitch = () => {
    setIsEnabled((prevState) => {
      const newValue = !prevState;
      setFormData((prevFormData) => ({
        ...prevFormData,
        is_confidential: newValue,
      }));
      return newValue;
    });
  };

  const toggleSwitchSecond = () => {
    setIsEnabledSecond((prevState) => {
      const newValue = !prevState;
      setFormData((prevFormData) => ({
        ...prevFormData,
        contact_permission: newValue,
      }));
      return newValue;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url + "/main/safety-report/", formData);
      console.log("Response:", response.data);

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        event_date: "",
        location: "",
        description: "",
        corrective_actions_description: "",
        recurrence_probability: 1,
        consequences_severity: "",
        is_confidential: false,
        contact_permission: false,
      });

      setShowAlert(true);
      setAlertType("success");
      setAlertMessage("Форма успешно отправлена");
    } catch (error) {
      console.error("Error during POST request:", error);

      const errorMessage =
        error.response?.data?.email?.[0] ||
        "Произошла ошибка при отправке формы";

      setShowAlert(true);
      setAlertType("error");
      setAlertMessage(errorMessage);
    }

    setTimeout(() => {
      const alertElement = document.querySelector(".alert-success");
      if (alertElement) {
        alertElement.classList.add("hiding");
      }
    }, 2700);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div id="securitydata">
      {showAlert && (
        <div
          className={`alert-success ${
            alertType === "error" ? "alert-error" : ""
          }`}
        >
          <div
            className={`alert-icon ${
              alertType === "error" ? "alert-icon-error" : ""
            }`}
          >
            {alertType === "success" ? "✓" : "!"}
          </div>
          <div className="alert-content">
            <div className="alert-title">
              {alertType === "success" ? "Успешно!" : "Ошибка!"}
            </div>
            <div className="alert-message">{alertMessage}</div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="securitydata">
          <h6>{t("zapolnite")}</h6>
          <p>{t("warning")}</p>
          <div className="switch_block">
            <label className="switch">
              <input
                type="checkbox"
                checked={formData.is_confidential}
                onChange={toggleSwitch}
              />

              <span
                className={`slider ${isEnabled ? "slider-on" : "slider-off"}`}
              >
                
              </span>
            </label>
            <h5>{t("revealed")}</h5>
          </div>
          <div className="switch_block switch_blocks">
            <label className="switch">
              <input
                type="checkbox"
                checked={formData.contact_permission}
                onChange={toggleSwitchSecond}
              />
              <span
                className={`slider ${
                  isEnabledSecond ? "slider-on" : "slider-off"
                }`}
              ></span>
            </label>
            <h5>{t("liaisons")}</h5>
          </div>
          {isEnabledSecond === true && (
            <div className="input_block">
              <div className="input-text">
                <a href="">
                  {t("disclosed")}{" "}
                  <span onClick={() => setIsEnabledSecond(false)}>X</span>
                </a>
              </div>
              <div className="input-dany">
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder={t("UserName")}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("Email")}
                />
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t("Phone")}
                />
              </div>
              <div className="input-data">
                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleInputChange}
                  placeholder={t("Date")}
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder={t("Address")}
                />
              </div>
            </div>
          )}
          <div className="input-info">
            <h5>{t("opis")}</h5>
            <textarea
              className="textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <h5>{t("Suggestions")}</h5>
            <textarea
              className="textarea"
              name="corrective_actions_description"
              value={formData.corrective_actions_description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="check-texts">
            <div className="check-tx">
              <h4>{t("your")}</h4>
              <h6>{t("unlikely")}</h6>
              <div className="check-namber">
                <div className="check-ts">
                  <input
                    type="radio"
                    name="recurrence_probability"
                    value="1"
                    onChange={handleInputChange}
                  />
                  <label>1</label>
                </div>
                <div className="check-ts">
                  <input
                    type="radio"
                    name="recurrence_probability"
                    value="2"
                    onChange={handleInputChange}
                  />
                  <label>2</label>
                </div>
                <div className="check-ts">
                  <input
                    type="radio"
                    name="recurrence_probability"
                    value="3"
                    onChange={handleInputChange}
                  />
                  <label>3</label>
                </div>
                <div className="check-ts">
                  <input
                    type="radio"
                    name="recurrence_probability"
                    value="4"
                    onChange={handleInputChange}
                  />
                  <label>4</label>
                </div>
                <div className="check-ts">
                  <input
                    type="radio"
                    name="recurrence_probability"
                    value="5"
                    onChange={handleInputChange}
                  />
                  <label>5</label>
                </div>
              </div>
            </div>
            <div className="check-txs">
              <h4>{t("reckon")}</h4>
              <h6>{t("catastrophic")}</h6>
              <div className="check-t">
                <div className="check-tt">
                  <input
                    type="radio"
                    name="consequences_severity"
                    value="A"
                    onChange={handleInputChange}
                  />
                  <label>A</label>
                </div>
                <div className="check-tt">
                  <input
                    type="radio"
                    name="consequences_severity"
                    value="B"
                    onChange={handleInputChange}
                  />
                  <label>B</label>
                </div>
                <div className="check-tt">
                  <input
                    type="radio"
                    name="consequences_severity"
                    value="C"
                    onChange={handleInputChange}
                  />
                  <label>C</label>
                </div>
                <div className="check-tt">
                  <input
                    type="radio"
                    name="consequences_severity"
                    value="D"
                    onChange={handleInputChange}
                  />
                  <label>D</label>
                </div>
                <div className="check-tt">
                  <input
                    type="radio"
                    name="consequences_severity"
                    value="E"
                    onChange={handleInputChange}
                  />
                  <label>E</label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-button">
            <button onClick={handleSubmit}>{t("Send")}</button>
          </div>
          <div className="input-line"></div>
        </div>
      </div>
    </div>
  );
};

export default SecurityData;
