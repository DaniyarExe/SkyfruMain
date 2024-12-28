import React from 'react'
import "./Here.css"
import { NavLink, useLocation } from 'react-router-dom'

const Here = () => {
    const location = useLocation()

    return (
        <div className='here'>
            Вы здесь:  <NavLink to="/">Главная</NavLink> / {location.pathname.replace("/", "")}
        </div>
    )
}

export default Here