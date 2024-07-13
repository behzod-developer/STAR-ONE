import React from 'react'
import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return (
        <footer className='landing-footer'>
            <div className="logo">
                <img src="" alt="Logo.png" />
                <h2>Business</h2>
            </div>
            <div className="social-media">
                <PiInstagramLogoFill />
                <BsTelegram />
                <FaYoutube />
            </div>
        </footer>
    )
}

export default Footer