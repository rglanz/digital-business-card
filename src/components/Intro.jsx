import React from 'react'
import introImage from '../assets/ryan.png'
import {FaEnvelope, FaLinkedin} from 'react-icons/fa'

function Intro() {
    return(
        <div className="intro">
            <img src={introImage} alt="" className="intro__img" />
            <h1 className="intro__name">Ryan Glanz</h1>
            <h4 className="intro__title">Frontend Developer</h4>
            <a href="https://www.ryanglanz.com" target="_blank" className="intro__website">ryanglanz.com</a>
            <div className="intro__btn-container">
                <a href="@mailto:glanzrm@gmail.com" target="_blank"><button className="intro__btn" id="intro__btn-email">
                    <FaEnvelope className="intro__btn-icon"/>
                    <p className="intro__btn-text">Email</p>
                </button></a>
                
                <a href="https://www.linkedin.com/in/ryan-glanz-172974118/" target="_blank"><button className="intro__btn" id="intro__btn-linkedin">
                    <FaLinkedin className="intro__btn-icon"/>
                    <p className="intro__btn-text">LinkedIn</p>
                </button></a>
            </div>
            
        </div>
    )   
}

export default Intro
