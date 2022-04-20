import React from 'react'
import introImage from '../assets/ryan.png'
import {FaEnvelope, FaLinkedin} from 'react-icons/fa'

function Intro() {
    return(
        <div className="intro">
            <img src={introImage} alt="" className="intro__img" />
            <h1 className="intro__name">Ryan Glanz</h1>
            <h4 className="intro__title">Frontend Developer</h4>
            <a href="ryanglanz.com" className="intro__website">ryanglanz.com</a>
            <div className="intro__btn-container">
                <button className="intro__btn" id="intro__btn-email">
                    <FaEnvelope className="intro__btn-icon"/>
                    <p className="intro__btn-text">Email</p>
                </button>
                
                <button className="intro__btn" id="intro__btn-linkedin">
                    <FaLinkedin className="intro__btn-icon"/>
                    <p className="intro__btn-text">LinkedIn</p>
                </button>
            </div>
            
        </div>
    )   
}

export default Intro
