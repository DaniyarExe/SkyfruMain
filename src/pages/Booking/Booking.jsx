import React, { useState } from 'react'
import "./Booking.css"
import air from "../../img/air.svg"
import line1 from "../../img/Line 1.svg"
import line2 from "../../img/Line 2.svg"
import { useNavigate } from 'react-router-dom'
import info from "../../img/info.svg"
import icon1 from "../../img/icon-square.svg"
import icon2 from "../../img/icon-square (1).svg"
import icon3 from "../../img/icon-square (2).svg"
import icon4 from "../../img/icon-square (3).svg"
import navigateIcon from "../../img/back.svg"

const Booking = () => {
    const [status, setStatus] = useState({
        lite: true,
        premium: false,
    })
    const navigate = useNavigate()

    return (
        <div className='booking'>
            <div className="container">
                <div className="navigate_block">
                    <img src={navigateIcon} alt="" />
                    <div>
                        <p className="navigate_title">Бронирование</p>
                    </div>
                </div>
                <div className="booking_body">
                    <div>
                        <div className="ticket_box">
                            <div className="title">
                                Ваш билет
                            </div>
                            <div className="air">
                                <div>
                                    <div className="title">
                                        16:55
                                    </div>
                                    <p>Бишкек</p>
                                </div>
                                <div className="air_contant">
                                    <p>4 ч 40 м</p>
                                    <div className="air_and_line">
                                        <img className='line' src={line1} alt="" />
                                        <img src={air} alt="" />
                                        <img className='line' src={line2} alt="" />
                                    </div>
                                    <p>Без пересадок</p>
                                </div>
                                <div>
                                    <div className='title'>
                                        18:50
                                    </div>
                                    <p>Москва</p>
                                </div>
                            </div>
                            <div className="air">
                                <div>
                                    <div className="title">
                                        16:55
                                    </div>
                                    <p>Москва</p>
                                </div>
                                <div className="air_contant">
                                    <p>4 ч 40 м</p>
                                    <div className="air_and_line">
                                        <img className='line' src={line1} alt="" />
                                        <img src={air} alt="" />
                                        <img className='line' src={line2} alt="" />
                                    </div>
                                    <p>Без пересадок</p>
                                </div>
                                <div>
                                    <div className='title'>
                                        18:50
                                    </div>
                                    <p>Бишкек</p>
                                </div>
                            </div>
                        </div>
                        <div className="booking_box">
                            <div className="title">
                                Уже есть аккаунт?
                            </div>
                            <p>Войдите в аккаунт, чтобы ускорить  процесс бронирования</p>
                            <div className="flex">
                                <button onClick={() => navigate("/login")} className='btn'>Войти</button>
                            </div>
                        </div>
                        <div className="booking_box">
                            <div className="title">
                                Контактная информация
                            </div>
                            <p>Вся информация о билетах будет отправляться на указанные контакты</p>
                            <div className="flex">
                                <input type="text" placeholder='Электронная почта' />
                                <input type="text" placeholder='Номер телефона' />
                            </div>
                        </div>
                        <div className="booking_box data">
                            <BookingData />
                            <BookingData />
                        </div>
                        <div className="booking_box">
                            <div className="title">
                                Выберите тариф: Бишкек-Москва
                            </div>
                            <p>Стоимость указана за всех пассажиров</p>
                            <div className="flex">
                                <div onClick={() => setStatus({ ...status, lite: true, premium: false })} className={status.lite ? "status active" : "status"}>
                                    <h3>Лайт</h3>
                                    <span className='price'>19 799</span>
                                    <p><img src={icon1} alt="" />Ручная кладь до 7 кг</p>
                                    <p><img src={icon2} alt="" />Багаж 1 место до 23 кг</p>
                                    <p><img src={icon3} alt="" />Обмен билета до вылета(более 24-часов)</p>
                                    <p><img src={icon4} alt="" />Возврат билета до вылета(более 24-часов)</p>
                                </div>
                                <div onClick={() => setStatus({ ...status, lite: false, premium: true })} className={status.premium ? "status active" : "status"}>
                                    <h3>Премиум</h3>
                                    <span className='price'>25 420</span>
                                    <p><img src={icon1} alt="" />Ручная кладь до 7 кг</p>
                                    <p><img src={icon2} alt="" />Багаж 1 место до 23 кг</p>
                                    <p><img src={icon3} alt="" />Обмен билета до вылета(более 24-часов)</p>
                                    <p><img src={icon4} alt="" />Возврат билета до вылета(более 24-часов)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fixet_block'>
                        <div className="summa none">
                            <div className="title">
                                Итоговая сумма:
                            </div>
                            <div className="price">
                                19 799 c
                            </div>
                            <p>За всех пассажиров</p>
                            <button>Выбрать</button>
                        </div>
                        <div className="summa_block">
                            <div className='summa_block_flex'>
                                <div className="title">
                                    Итого:
                                </div>
                                <div>
                                    <div className="price">
                                        19 799 c
                                    </div>
                                    <p>За всех пассажиров</p>
                                </div>
                            </div>
                            <button>Выбрать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking

const BookingData = () => {
    const [ganger, setGanger] = useState({
        men: true,
        women: false,
    })

    return (
        <div className="data">
            <div className="title">
                1-пассажир(от 12 лет)
            </div>
            <p> <img src={info} alt="" /> Для перелета на данном рейсе необходимо указывать данные латинскими буквами!</p>
            <div className="flex">
                <input type="text" placeholder='Гражданство' />
                <input type="text" placeholder='Тип документа' />
                <input type="text" placeholder='Номер документа' />
                <input type="text" placeholder='Срок дейсвтия' />
                <input type="text" placeholder='Имя' />
                <input type="text" placeholder='Фамилия' />
                <input type="date" placeholder='Дата рождения' />
                <div className='btns'>
                    <button onClick={() => setGanger({ ...ganger, men: true, women: false })} style={{ background: ganger.men ? "var(--blue)" : "none", color: ganger.men ? "var(--white)" : "#9F9F9F" }}>Мужской</button>
                    <button onClick={() => setGanger({ ...ganger, men: false, women: true })} style={{ background: ganger.women ? "var(--blue)" : "none", color: ganger.women ? "var(--white)" : "#9F9F9F" }}>Женский</button>
                </div>
            </div>
        </div>
    )
}