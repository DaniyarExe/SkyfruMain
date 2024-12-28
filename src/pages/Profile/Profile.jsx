import React, { useEffect, useState } from "react";
import "./Profile.css";
import empty from "../../img/empty_bought_tickets.png";
import arrow from "../../img/arrow_direct.svg";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../../img/profile.svg";
import change from "../../img/change.svg";
import Modal from "../../components/UI/Modal/Modal";
import axios from "axios";
import  url  from "../../Api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loading from "../../components/UI/Loading/Loading";
import check from "../../img/check.svg";

const Profile = ({
  loginModal,
  setLoginModal,
  registerModal,
  setRegisterModal,
}) => {
  const [data, setData] = useState(true);
  const [ticket, setTicket] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [visible, setVisible] = useState({
    visible1: false,
    visible2: false,
    visible3: false,
  });
  const [password, setPassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [local, setLocal] = useState();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLocal(token);
    }
  }, [location]);

  const headers = {
    Authorization: `Token ${local}`,
  };

  const ChangeFunc = async (e) => {
    e.preventDefault();
    if (
      password.new_password !== "" &&
      password.old_password !== "" &&
      password.confirm_password !== ""
    ) {
      if (password.new_password == password.confirm_password) {
        if (
          password.new_password.length >= 8 &&
          password.confirm_password.length >= 8
        ) {
          setLoading(true);
          try {
            const response = await axios.post(
              url + "/auth/change-password/",
              {
                old_password: password.old_password,
                new_password: password.new_password,
                confirm_password: password.confirm_password,
              },
              { headers }
            );
            if (response.data.response === true) {
              alert(response.data.message, "success");
              setPassword({
                ...password,
                old_password: "",
                new_password: "",
                confirm_password: "",
              });
            } else {
              alert(response.data.message, "error");
            }
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        } else {
          alert("Новый пароль должен быть не менее 8-ми символов", "error");
        }
      } else {
        alert("Пароли не совпадают", "error");
      }
    } else {
      alert("Заполните все поля!", "error");
    }
  };

  return (
    <div className="profile">
      {loginModal && (
        <Modal setModal={setLoginModal}>
          <img src={check} alt="" />
          <p className="modal_title">С возвращением, Нурзида!</p>
          <p className="modal_text">
            Теперь вы можете легко и просто найти и покупать билеты в SkyFru
          </p>
          <button onClick={() => setLoginModal(false)} className="modal_btn">
            Понятно
          </button>
        </Modal>
      )}
      {registerModal && (
        <Modal setModal={setRegisterModal}>
          <img src={check} alt="" />
          <p className="modal_title">Добро пожаловать, Нурзида!</p>
          <p className="modal_text">
            Теперь вы можете легко и просто найти и покупать билеты в SkyFru
          </p>
          <button onClick={() => setRegisterModal(false)} className="modal_btn">
            Понятно
          </button>
        </Modal>
      )}
      {modal && (
        <Modal setModal={setModal}>
          <p className="modal_title a">Сменить пароль</p>
          <p className="modal_text">
            Придумайте новый пароль и введите его ещё раз для потверждения
          </p>
          <form onSubmit={ChangeFunc} className="form_password">
            <div className="input_box">
              <input
                className="input_form"
                value={password.old_password}
                onChange={(e) =>
                  setPassword({ ...password, old_password: e.target.value })
                }
                type={visible.visible1 ? "text" : "password"}
                placeholder="Старый пароль"
                required
              />
              <span
                className="span-icon"
                onClick={() =>
                  setVisible({ ...visible, visible1: !visible.visible1 })
                }
              >
                {visible.visible1 ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
            <div className="input_box">
              <input
                className="input_form"
                value={password.new_password}
                onChange={(e) =>
                  setPassword({ ...password, new_password: e.target.value })
                }
                type={visible.visible2 ? "text" : "password"}
                placeholder="Новый пароль"
                required
              />
              <span
                className="span-icon"
                onClick={() =>
                  setVisible({ ...visible, visible2: !visible.visible2 })
                }
              >
                {visible.visible2 ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
            <div className="input_box">
              <input
                className="input_form"
                value={password.confirm_password}
                onChange={(e) =>
                  setPassword({ ...password, confirm_password: e.target.value })
                }
                type={visible.visible3 ? "text" : "password"}
                placeholder="Повторите пароль"
                required
              />
              <span
                className="span-icon"
                onClick={() =>
                  setVisible({ ...visible, visible3: !visible.visible3 })
                }
              >
                {visible.visible3 ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
            <button
              disabled={loading}
              onSubmit={ChangeFunc}
              className="button_form"
            >
              {loading ? <Loading color={"#fff"} /> : "Сменить пароль"}
            </button>
          </form>
        </Modal>
      )}
      <div className="container">
        <div className="title">Профиль</div>
        <div className="profile_head">
          <div
            onClick={() => setData(true) || setTicket(false)}
            className={data ? "profile_page active" : "profile_page"}
          >
            Личные данные
          </div>
          <div
            onClick={() => setData(false) || setTicket(true)}
            className={ticket ? "profile_page active" : "profile_page"}
          >
            Мои билеты
          </div>
        </div>
        {data && (
          <div className="profile_data">
            <div className="data">
              <div className="preview">
                <img src={profile} alt="" />
                <img className="absolute" src={change} alt="" />
              </div>
              <p onClick={() => setDisabled(!disabled)} className="blue_text">
                {" "}
                {disabled ? "Редактировать" : "Сохранить"}
              </p>
              <div className="block">
                <div className="preview">
                  <img src={profile} alt="" />
                  <img className="absolute" src={change} alt="" />
                </div>
                <p onClick={() => setDisabled(!disabled)} className="blue_text">
                  {" "}
                  {disabled ? "Редактировать" : "Сохранить"}
                </p>
              </div>
              <input
                disabled={disabled}
                className={disabled ? "input_form disabled" : "input_form"}
                type="text"
                placeholder="Имя"
              />
              <input
                disabled={disabled}
                className={disabled ? "input_form disabled" : "input_form"}
                type="text"
                placeholder="Фамилия"
              />
              <input
                disabled={disabled}
                className={disabled ? "input_form disabled" : "input_form"}
                type="text"
                placeholder="Номер"
              />
              <input
                disabled={true}
                className="input_form disabled"
                type="text"
                placeholder="email"
              />
              <input
                disabled={disabled}
                className={disabled ? "input_form disabled" : "input_form"}
                type="text"
                placeholder="Пароль"
              />
              <p onClick={() => setModal(true)} className="blue_text password">
                Сменить пароль
              </p>
            </div>
            <div className="red_text">Выйти с аккаунта</div>
          </div>
        )}
        {ticket && (
          <div className="ticket_profile">
            <div onClick={() => navigate("/detail-ticket/1")} className="bilet">
              <div className="flex_box">
                <div className="flex">
                  <span className="flex_title">
                    Авиабилет
                    <span className="flex_code">#P34633374586</span>
                  </span>
                  <span className="flex_code none">#P34633374586</span>
                  <div>
                    <span className="status gray">
                      Архив <div className="circle gray"></div>{" "}
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="date">
                      16:55
                      <p>Бишкек</p>
                    </div>
                  </div>
                  <div>
                    <div className="date">
                      18:50
                      <p>Москва</p>
                    </div>
                  </div>
                </div>
                <div className="flex none">
                  <p>1 пассажир</p>
                  <p>4-декабря, пн</p>
                </div>
              </div>
              <div className="border none">
                <span className="status gray">
                  Архив <div className="circle gray"></div>{" "}
                </span>
                <img src={arrow} alt="" />
              </div>
              <div className="border_block">
                <div>
                  <p>1 пассажир</p>
                  <p>4-декабря, пн</p>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
            {/* <div className="not_data">
                        <img src={empty} alt="" />
                        <div className="not_data_title">
                            У вас нет купленных билетов
                        </div>
                        <div className="not_data_text">
                            Здесь будут появляться ваши купленные билеты
                        </div>
                    </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
