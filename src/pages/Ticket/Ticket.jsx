import React, { useState } from 'react'
import "./Ticket.css"
import air from "../../img/air.svg"
import line1 from "../../img/Line 1.svg"
import line2 from "../../img/Line 2.svg"
import { useNavigate } from 'react-router-dom'
import refresh from "../../img/refresh.svg"
import Modal from '../../components/UI/Modal/Modal'
import navigateIcon from "../../img/back.svg"

const Ticket = () => {
  const [modal, setModal] = useState(true)
  const navigate = useNavigate()

  return (
    <div className='ticket'>
      <div className="container">
        <div className="search_block">
          <div className='search_div' >
            <input className='border1' type="text" placeholder='Откуда?' />
            <input type="text" placeholder='Куда?' />
            <input type="date" />
            <input type="date" />
            <input className='border2' type="text" />
          </div>
          <button>Найти</button>
        </div>
        <div className="navigate_block">
          <img src={navigateIcon} alt="" />
          <div>
            <p className="navigate_title">Бишкек - Москва</p>
            <p className='navigate_text'>4 декабря,пн, 1 пассажир, эконом</p>
          </div>
        </div>
        <div className="contant">
          <div onClick={() => navigate("/booking")} className="ticket_box">
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
              <button>Выбрать</button>
            </div>
            <div className="summs_block">
              <div>
                <div className="price">
                  19 799 c
                </div>
                <p>За всех пассажиров</p>
              </div>
              <button>Выбрать</button>
            </div>
          </div>
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
              <button>Выбрать</button>
            </div>
            <div className="summs_block">
              <div>
                <div className="price">
                  19 799 c
                </div>
                <p>За всех пассажиров</p>
              </div>
              <button>Выбрать</button>
            </div>
          </div>
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
            <div className="air top">
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
              <button>Выбрать</button>
            </div>
            <div className="summs_block">
              <div>
                <div className="price">
                  19 799 c
                </div>
                <p>За всех пассажиров</p>
              </div>
              <button>Выбрать</button>
            </div>
          </div>
        </div>
      </div>
      {modal &&
        <Modal setModal={setModal}>
          <img src={refresh} alt="" />
          <p className="modal_title">
            Результаты могли устареть
          </p>
          <p className='modal_text'>
            Цены на билеты обновляются около 10 раз в день. Обновите поиск, чтобы увидеть точные даты
          </p>
          <button className='modal_btn'>Обновить</button>
        </Modal>
      }
    </div>
  )
}

export default Ticket