import React, { useState } from 'react'
import "./ForgotPassword.css"
import Loading from "../../components/UI/Loading/Loading";
import { useNavigate } from "react-router-dom";
import  url  from "../../Api";
import axios from "axios";
import navigateImage from "../../img/navigate.svg"

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(url + "/auth/forgot-password/", {
        email,
      });
      if (response.data.response === true) {
        localStorage.setItem("email", email)
        alert(response.data.message, "success");
        navigate("/activation/verify");
      } else {
        if (response.data.message) {
          alert(response.data.message, "error");
        }
        setError(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <div className='forgot_password'>
        <div className="container">
          <div className="navigate">
            <img onClick={() => navigate(-1)} src={navigateImage} alt="" />
          </div>
          <div className="login_form">
            <div className="login_form_head">
              <span className='h1'>
                Забыли пароль?
              </span>
            </div>
            <div className="login_form_body">
              <form onSubmit={handleSubmit} className="form_forgot">
                <p>Мы отправим код на вашу электронную почту</p>
                <div className="input_box">
                  {/* <label className="label_form">E-mail</label> */}
                  <input
                    className="input_form"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Электронная почта"
                  />
                  {error.email && <p className="red">{error.email}</p>}
                </div>
                <button onSubmit={handleSubmit} className="button_form">
                  {loading ? <Loading color={"#fff"} /> : "Получить код"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword