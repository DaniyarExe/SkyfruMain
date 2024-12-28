import React from "react";
import "./PrivacyPolicy.css";
import PrivacyFiles from "../../files/pdf/terms.pdf";
import PrivacyPolicy from "../../files/pdf/privacy-policy.pdf";
import Terms from "../../files/pdf/files-policy.pdf";

const About = () => {
  return (
    <div className="privacy-policy min-height-60vh">
      <div className="container">
        <div className="deep-links">
          <a href={PrivacyFiles} target="_blank">
            Согласие на обработку персональных данных
          </a>
          <a href={PrivacyPolicy} target="_blank">
            Положение о конфиденциальности
          </a>
          <a href={Terms} target="_blank">
            Политика использование файлов cookie
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
