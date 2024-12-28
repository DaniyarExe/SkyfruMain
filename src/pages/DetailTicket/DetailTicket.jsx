import React, { useState } from 'react'
import "./DetailTicket.css"
import air from "../../img/air.svg"
import line1 from "../../img/Line 1.svg"
import line2 from "../../img/Line 2.svg"
import back from "../../img/back.svg"
import { Navigate, useNavigate } from 'react-router-dom'
import ModalDown from '../../components/UI/ModalDown/ModalDown'

const DetailTicket = () => {
    const [filter, setFilter] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='detail_ticket'>
            {filter && <ModalDown setModal={setFilter} >
                <div style={{marginTop: 30}}>
                    <button className='modal_btn'>Маршрутная квитанция</button>
                    <button className='modal_btn'>Электронный чек</button>
                    <button className='modal_btn'>Оформить возврат</button>
                </div>
            </ModalDown>}
            <div className="container">
                <div className="wrap">
                    <img className='back' onClick={() => navigate(-1)} src={back} alt="" />
                </div>
                <div className="wrapper">
                    <div className="block">
                        <span className='title'>Детали билета</span>
                        <span className='code'>#P34633374586</span>
                        <span className='status green none'>В ожидании <div className="circle green"></div> </span>
                        <div onClick={() => setFilter(true)} className="filter">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p className='text'>Билет оплачен и выписан</p>
                    <div className="flex">
                        <p className='contant_text'>Покупка 1-декабря, пт</p>
                        <span className='status status_block green'>В ожидании <div className="circle green"></div> </span>
                    </div>
                    <div className="nav">
                        <div className="ticket_box">
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
                            <div className="summa none">
                                <div className="price">
                                    19 799 c
                                </div>
                                <p>За всех пассажиров</p>
                                <p>4-декабря, пн</p>
                                <p>Эконом/Лайт</p>
                            </div>
                            <div className="summa_block">
                                <div>
                                    <p>4-декабря, пн</p>
                                    <p>Эконом/Лайт</p>
                                </div>
                                <div>
                                    <div className="price">
                                        19 799 c
                                    </div>
                                    <p>За всех пассажиров</p></div>
                            </div>
                        </div>
                        <div className="btns none">
                            <div className="btn">
                                Маршрутная квитанция
                            </div>
                            <div className="btn">
                                Электронный чек
                            </div>
                            <div className="btn">
                                Оформить возврат
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_title">
                                nurzida asanbekova
                            </div>
                            <div className="box_text">
                                PNR: JR03MI, e-ticket: 07K6116571109
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTicket