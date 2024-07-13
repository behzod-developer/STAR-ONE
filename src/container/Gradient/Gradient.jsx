import React from 'react'
import './Gradient.css'
import { RxSwitch } from "react-icons/rx";

function Gradient({text, text_2, text_3, text_4}) {
  return (
    <h1 className="gradient-text">{text} <br /> {text_4}<RxSwitch className='home-switch' />{text_2} <br /> {text_3}</h1>
  )
}

export default Gradient