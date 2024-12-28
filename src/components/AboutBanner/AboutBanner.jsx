import React from 'react'
import "./AboutBanner.css"
import banner from "../../img/about_header.png"

const AboutBanner = () => {
    return (
        <div className='about_banner'>
            <div className="container">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default AboutBanner