import React, { useState, useEffect } from "react";
import "./Activation.css";
import  url  from "../../Api";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/UI/Loading/Loading";
import navigateImage from "../../img/navigate.svg"

const Activation = ({
  setLoginModal,
  setRegisterModal
}) => {
  const { verify } = useParams()
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Введите шестизначный код", "error");
    }
    if (code.length == 6) {
      setLoading(true);
      try {
        const activation = verify === "verify" ? "/auth/forgot-password-verify/" : "/auth/verify-email/"
        const response = await axios.post(url + activation, {
          code,
          email: email,
        });
        if (response.data.response === true) {
          localStorage.setItem("email", email);
          localStorage.setItem("token", response.data.token);
          if (verify !== "verify") {
            alert(response.data.message, "success");
          }
          if (verify === "verify") {
            setRegisterModal(true)
            navigate("/dashboard");
          } else {
            setLoginModal(true)
            navigate("/dashboard");
          }
        } else {
          alert(response.data.message, "error");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const Again = async () => {
    const email = localStorage.getItem("email");
    try {
      const response = await axios.post(url + "/auth/re-send/", {
        email: email,
      });
      if (response.data.response == true) {
        alert(response.data.message, "success");
      } else {
        alert(response.data.message, "error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth">
      <div className='activation'>
        <div className="container">
          <div className="navigate">
            <img onClick={() => navigate(-1)} src={navigateImage} alt="" />
          </div>
          <div className="login_form">
            <div className="login_form_head">
              <span className="h1">
                Введите код
              </span>
            </div>
            <div className="login_form_body">
              <p>Мы отправили код на вашу электронную почту</p>
              <form onSubmit={fetchData}>
                <input
                  style={{ textAlign: "center" }}
                  className="input_form"
                  value={code}
                  type="number"
                  placeholder="Код потверждения"
                  onChange={(e) => setCode(e.target.value)}
                />
                <button style={{ marginTop: 20 }} disabled={loading} onSubmit={fetchData} className="button_form">
                  {loading ? <Loading color={"#fff"} /> : "Подвердить"}
                </button>
              </form>
              <p onClick={Again} className="re_send">
                Отправить снова
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activation