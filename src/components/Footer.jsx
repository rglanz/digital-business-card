import React from 'react'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

function Footer() {
    return(
        <div className="footer">
            <a href="" className="footer__link"><FaTwitterSquare/></a>
            <a href="" className="footer__link"><FaFacebookSquare/></a>
            <a href="" className="footer__link"><FaInstagramSquare/></a>
            <a href="" className="footer__link"><FaGithubSquare/></a>
        </div>
    )   
}


export default Footer
