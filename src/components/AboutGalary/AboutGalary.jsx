import React from 'react'
import "./AboutGalary.css"
import photo2 from "../../img/photo2.svg"
import photo3 from "../../img/photo3.svg"
import photo4 from "../../img/photo4.svg"
import photo5 from "../../img/photo5.svg"
import photo6 from "../../img/photo6.svg"

const AboutGalary = () => {
    return (
        <div className='about_galary'>
            <div className="container">
                <h2>
                    Галерея
                </h2>
                <div className="contant_img">
                    <div className="contant_img_block">
                        <img src={photo2} alt="" />
                    </div>
                    <div className="contant_img_block_one">
                        <img src={photo3} alt="" />
                        <img src={photo4} alt="" />
                    </div>
                    <div className="contant_img_block_two">
                        <img src={photo5} alt="" />
                        <img className='height' src={photo6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutGalary