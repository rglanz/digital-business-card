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
            <button className="intro__email-btn">
                <span className="intro__email-span">
                    <FaEnvelope />
                    <p className="intro__email-text">Email</p>
                </span>
            </button>
            
            <button className="intro__linkedin-btn">
                <span className="intro__linkedin-span">
                    <FaLinkedin />
                    <p className="intro__linkedin-text">LinkedIn</p>
                </span>
            </button>
        </div>
    )   
}

export default Intro
