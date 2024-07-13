import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { RxSwitch } from "react-icons/rx";
import Gradient from '../../container/Gradient/Gradient';
import Header_data from './header-bottom/Header_data';
// import Swiper from '../../container/Swiper/Swiper';
import SwiperCard from '../../container/Swiper/SwiperCard';

function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-top-left-line header-line"></div>
      <div className="header-top-right-line header-line"></div>

      <div className="header-text">
        <div className="header-first-child">
          <h1>
            <Gradient text={`Мы поддерживаем  `} text_4={ `р`} text_2={`ст вашего `} text_3={`бизнеса`} />
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
      <div className="header-second">
        <Header_data />
      </div>
      <SwiperCard />
    </header>
  )
}

export default Header