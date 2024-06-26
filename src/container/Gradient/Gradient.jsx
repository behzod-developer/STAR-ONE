import React from 'react'
import './Gradient.css'
import { RxSwitch } from "react-icons/rx";

function Gradient({text, text_2}) {
  return (
    <h1 className="gradient-text">{text}<RxSwitch className='home-switch' />{text_2}</h1>
  )
}

export default Gradient