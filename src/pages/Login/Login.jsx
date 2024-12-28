import React, { useState } from 'react'
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import url  from '../../Api';
import Loading from '../../components/UI/Loading/Loading';
import navigateImage from "../../img/navigate.svg"

const Login = ({ setLoginModal }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(url + "/auth/login/", {
                email,
                password,
            });
            localStorage.setItem("email", email);
            if (response.data.response === true) {
                const { token } = response.data;
                localStorage.setItem("token", token);
                navigate("/dashboard");
                setLoginModal(true)
                alert(response.data.message)
            } else {
                if (response.data.message) {
                    alert(response.data.message, "error");
                }
                if (response.data.isactivated == false) {
                    alert(response.data.message, "error");
                    navigate("/activation");
                }
                setErrorLogin(response.data);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="auth">
            <div className='login'>
                <div className="container">
                    <div className="navigate">
                        <img onClick={() => navigate(-1)} src={navigateImage} alt="" />
                    </div>
                    <div className="login_form">
                        <div className="login_form_head">
                            <span className='h1'>
                                Войти в аккаунт
                            </span>
                        </div>
                        <div className="login_form_body">
                            <form onSubmit={handleSubmit}>
                                <div className="input_box">
                                    {/* <label className="label_form">E-mail</label> */}
                                    <input
                                        className="input_form"
                                        value={email}
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Электронная почта"
                                    />
                                    {errorLogin.email && <p className="red">{errorLogin.email}</p>}
                                </div>
                                <div className="input_box d">
                                    {/* <label className="label_form">Пароль</label> */}
                                    <input
                                        className="input_form"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={visible ? "text" : "password"}
                                        placeholder="Пароль"
                                    />
                                    <span className="span-icon" onClick={() => setVisible(!visible)}>
                                        {visible ? <FaEye /> : <FaEyeSlash />}{" "}
                                    </span>
                                    {errorLogin.password && (
                                        <p className="red">{errorLogin.password}</p>
                                    )}
                                </div>
                                <div className="forgot_password_link">
                                    <NavLink className="forgot" to="/forgot-password">
                                        Забыли пароль?
                                    </NavLink>
                                </div>
                                <button style={{ margin: "20px 0" }} onSubmit={handleSubmit} className="button_form">
                                    {loading ? <Loading /> : "Войти"}
                                </button>
                                <p className="p_content">
                                    Ещё нет аккаунта?{" "}
                                    <NavLink className="a_content" to="/register">
                                        Зарегистрироваться
                                    </NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login