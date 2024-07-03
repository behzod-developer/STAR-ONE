import React from "react";
import "./Section_3.css";
import macbook from "../../../assets/MacBook-Pro-16.png";
import { FaFileAlt } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";

function Section_3() {
  return (
    <div className="section_2-container">
      <div className="section_3-parent">
        <div className="section_3-left">
          <div className="section_3-line">
            <div className="shag-1_icon">
              <FaFileAlt />
            </div>
            <div className="shag-2_icon">
              <FaHandshake />
            </div>
            <div className="shag-3_icon">
              <BsBoxes />
            </div>
            <div className="shag-4_icon">
              <FaCartFlatbed />
            </div>
            <div className="shag-5_icon">
              <FaWallet />
            </div>
          </div>
          <div className="section_3-shag">
            <span>
              <p>1 шаг</p>
              <small>
                <b>Юридическое оформление:</b> Откройте свой бизнес, выбрав
                подходящую юридическую форму (ООО, ИП и т.д.) и завершите
                необходимые регистрационные процессы.
              </small>
            </span>
            <span>
              <p>2 шаг</p>
              <small>
                <b>Регистрация на маркетплейсе: </b>Зарегистрируйтесь на нашем
                маркетплейсе, предоставив необходимую информацию о вашей
                компании и бизнесе.
              </small>
            </span>
            <span>
              <p>3 шаг</p>
              <small>
                <b>Добавление товаров:</b> Добавьте свои товары, обеспечивая
                полную и точную информацию о каждом из них. Добавьте свои товары
                с четкими фотографиями, подробными описаниями и указанием
                ключевых характеристик, чтобы привлечь внимание покупателей.
              </small>
            </span>
            <span>
              <p>4 шаг</p>
              <small>
                <b>Проверка и утверждение:</b> Наша команда проведет проверку
                вашей учетной записи и товаров, гарантируя соответствие
                стандартам безопасности.
              </small>
            </span>
            <span>
              <p>5 шаг</p>
              <small>
                <b>Заработок:</b> Получайте доход от успешных продаж, следите за
                статистикой и используйте маркетинговые инструменты для
                максимизации вашего заработка.
              </small>
            </span>
          </div>
        </div>
        <div className="section_3-mac_book">
          <img src={macbook} alt="macbook" />
        </div>
      </div>
    </div>
  );
}

export default Section_3;
