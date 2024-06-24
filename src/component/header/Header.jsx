import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { RxSwitch } from "react-icons/rx";
import Gradient from '../../container/Gradient/Gradient';

function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-top-left-line header-line"></div>
      <div className="header-top-right-line header-line"></div>

      <div className="header-text">
        <div className="header-first-child">
          <h1>
            <Gradient text={`Мы поддерживаем \n  рooст вашего \n бизнеса`} />
          </h1>
        </div>
        <div className="header-second-child">
          <p>StarOne - это платформа для продавцов, производителей и дистрибьюторов, чтобы вы могли развивать свой бизнес с помощью продаж на маркетплейсе</p>
          <div className="header-btn">
            <button>Стать продавцом</button>
            <button>Связаться с нами</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header