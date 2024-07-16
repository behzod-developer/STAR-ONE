import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'
import { RxSwitch } from "react-icons/rx";
import Gradient from '../../container/Gradient/Gradient';
import Header_data from './header-bottom/Header_data';
// import Swiper from '../../container/Swiper/Swiper';
import SwiperCard from '../../container/Swiper/SwiperCard';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  const jsonData = {
    message: t('header_main_title')
  };

  // Split the message by newline character and map to create line breaks
  const messageWithLineBreaks = jsonData.message.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <header>
      <Navbar />
      <div className="header-top-left-line header-line"></div>
      <div className="header-top-right-line header-line"></div>

      <div className="header-text">
        <div className="header-first-child">
          <h1>
            <Gradient text={messageWithLineBreaks} />
          </h1>
        </div>
        <div className="header-second-child">
          <p>{t('landing_header_text')}</p>
          <div className="header-btn">
            <button>{t('landing_button_1')}</button>
            <button>{t('landing_button_2')}</button>
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