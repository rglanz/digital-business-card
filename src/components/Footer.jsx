import React from 'react'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

function Footer() {
    return(
        <div className="footer">
            <a href="#" className="footer__link"><FaTwitterSquare className="footer__icon" /></a>
            <a href="#" className="footer__link"><FaFacebookSquare className="footer__icon" /></a>
            <a href="#" className="footer__link"><FaInstagramSquare className="footer__icon" /></a>
            <a href="https://github.com/rglanz" target="_blank" className="footer__link"><FaGithubSquare className="footer__icon" /></a>
        </div>
    )   
}


export default Footer
