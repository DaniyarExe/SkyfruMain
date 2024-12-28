import React, { useState } from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Loading from "../../components/UI/Loading/Loading";
import url from "../../Api";
import { NavLink, useNavigate } from "react-router-dom";
import navigateImage from "../../img/navigate.svg";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [inputData, setInputData] = useState({
    phone: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (inputData.password === inputData.confirm_password) {
      const dataNew = {
        email: inputData.email,
        phone: inputData.phone,
        first_name: inputData.first_name,
        last_name: inputData.last_name,
        password: inputData.password,
        confirm_password: inputData.confirm_password,
      };
      try {
        const response = await axios.post(url + "/auth/register/", dataNew);
        if (response.data.response === true) {
          localStorage.setItem("email", inputData.email);
          navigate("/activation");
          alert(response.data.message);
          console.log(inputData.email);
        } else {
          if (response.data.message) {
            alert(response.data.message, "error");
          }
          setError(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      alert("Пароли не совпадают", "error");
    }
  };

  return (
    <div className="auth">
      <div className="register">
        <div className="container">
          <div className="navigate">
            <img onClick={() => navigate(-1)} src={navigateImage} alt="" />
          </div>
          <div className="login_form">
            <div className="login_form_head">
              <span className="h1">Регистрация</span>
            </div>
            <div className="login_form_body">
              <form onSubmit={handleSubmit} className="register_from">
                <div className="register_grid">
                  <div className="input_box">
                    {/* <label className="label_form">Имя</label> */}
                    <input
                      className="input_form"
                      type="text"
                      value={inputData.first_name}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          first_name: e.target.value,
                        })
                      }
                      name="first_name"
                      placeholder="Имя"
                      required
                    />
                    {error.first_name && (
                      <p className="red">{error.first_name}</p>
                    )}
                  </div>
                  <div className="input_box">
                    {/* <label className="label_form">Фамилия</label> */}
                    <input
                      className="input_form"
                      type="text"
                      value={inputData.last_name}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          last_name: e.target.value,
                        })
                      }
                      name="last_name"
                      placeholder="Фамилия"
                      required
                    />
                    {error.last_name && (
                      <p className="red">{error.last_name}</p>
                    )}
                  </div>
                  <div className="input_box">
                    {/* <label className="label_form">Номер телефона</label> */}
                    <input
                      className="input_form"
                      type="number"
                      placeholder="Введите номер"
                      value={inputData.phone}
                      onChange={(e) =>
                        setInputData({ ...inputData, phone: e.target.value })
                      }
                      name="phone"
                      required
                    />
                    {error.phone && <p className="red">{error.phone}</p>}
                  </div>
                  <div className="input_box">
                    {/* <label className="label_form">E-mail</label> */}
                    <input
                      className="input_form"
                      onChange={(e) =>
                        setInputData({ ...inputData, email: e.target.value })
                      }
                      value={inputData.email}
                      type="text"
                      placeholder="E-mail"
                      required
                    />
                    {error.email && <p className="red">{error.email}</p>}
                  </div>
                  <div className="input_box">
                    {/* <label className="label_form">Пароль</label> */}
                    <input
                      className="input_form"
                      onChange={(e) =>
                        setInputData({ ...inputData, password: e.target.value })
                      }
                      value={inputData.password}
                      type={visible ? "text" : "password"}
                      placeholder="Пароль"
                      required
                    />
                    <span
                      className="span-icon"
                      onClick={() => setVisible(!visible)}
                    >
                      {" "}
                      {visible ? <FaEye /> : <FaEyeSlash />}{" "}
                    </span>
                    {error.confirm_password && (
                      <p className="red">{error.confirm_password}</p>
                    )}
                    {error.non_field_errors && (
                      <p className="red">{error.non_field_errors}</p>
                    )}
                  </div>
                  <div className="input_box hh">
                    {/* <label className="label_form"> Повторить пороль </label> */}
                    <input
                      className="input_form"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          confirm_password: e.target.value,
                        })
                      }
                      value={inputData.confirm_password}
                      type={visible2 ? "text" : "password"}
                      placeholder="Повторить пороль"
                      required
                    />
                    <span
                      className="span-icon"
                      onClick={() => setVisible2(!visible2)}
                    >
                      {" "}
                      {visible2 ? <FaEye /> : <FaEyeSlash />}{" "}
                    </span>
                  </div>
                </div>
                {/* <p className="p_content">
                Нажимая на кнопку «Регистрация», Вы принимаете условия{" "}
                <a
                  className="a_content"
                  href="https://docs.google.com/document/d/13oK87PDT-KsJrR9TueQdnk9lFW_CUxaMOn6PT_FinOQ"
                  target="blank"
                >
                  Публичной оферты
                </a>{" "}
              </p> */}
                <div className="all-submit">
                  <button
                    style={{ margin: "20px 0" }}
                    disabled={loading}
                    className="button_form"
                    onSubmit={handleSubmit}
                  >
                    {loading ? <Loading color={"#fff"} /> : "Регистрация"}
                  </button>
                </div>
                <p className="p_content">
                  Уже есть аккаунт ?{" "}
                  <NavLink className="a_content" to="/login">
                    Войти
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
