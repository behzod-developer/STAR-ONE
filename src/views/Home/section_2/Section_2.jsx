import React from "react";
import "./Section_2.css";
import statistica from "../../../assets/Vector 9.png";
import progress from "../../../assets/tabler_chart-pie-filled.png";
import { VscTriangleDown } from "react-icons/vsc";
import { ImArrowUp } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLike } from "react-icons/bi";

function Section_2() {
  return (
    <div className="section_2-container">
      <div className="section_2-parent section_2-between">
        <div className="section_2-parent section_2-gap">
          <div className="section_2-line"></div>
          <div className="section_2-header-text">
            <h2>
              Посмотрите и узнайте лучшие услуги, которые мы предоставляем
            </h2>
          </div>
        </div>
        <div className="section_2-header-text-2">
          <p>
            Используйте уникальные инструменты для продвижения и повышения
            видимости ваших товаров. Увеличьте продажи и привлекайте больше
            клиентов, создавая успешный бизнес вместе с нами!
          </p>
        </div>
      </div>

      <div className="section_2-statistic">
        <div className="section_2-left-box">
          <h4>Управление</h4>
          <p>
            Простота и эффективность в одном месте! Управляйте вашими товарами
            легко - добавляйте, обновляйте и контролируйте их статус, предлагая
            клиентам непревзойденный опыт покупок.
          </p>
          <div className="section_2-cards">
            <div className="section_2-card-1">
              <img src={progress} alt="progress" />
              <h2>Аналитика товаров</h2>
              <VscTriangleDown className="icons" />
            </div>
            <div className="section_2-card-2"></div>
            <div className="section_2-card-3"></div>
          </div>
        </div>
        <div className="section_2-right-box">
          <div className="section_2-back-top">
            <div className="section_2-back-box_1">
              <h3>Повышение</h3>
              <p>Максимизируйте свои возможности!</p>
              <div>
                <ImArrowUp className="narrow" />
                <b>100%</b>
              </div>
            </div>
            <div className="section_2-back-box_2">
              <h3>Статистика</h3>
              <p>
                Следите за успехом вашего бизнеса в режиме реального времени
              </p>
              <img src={statistica} alt="img" />
            </div>
          </div>
          <div className="section_2-back-bottom">
            <div className="section_2-back-box_3">
              <h3>Отношение</h3>
              <p>Постройте взаимовыгодные связи с вашими клиентами</p>
              <div className="section_2-bottom-dot-line">
                <div className="section_2-bottom-cyrcle"></div>
                <div className="section_2-dot-1"></div>
                <div className="section_2-bottom-cyrcle-2">
                <BiLike />
                </div>
              </div>
            </div>

            <div className="section_2-back-box_4">
              <h3>И еще <br /> много <br /> сервисов</h3>
              <div className="narrow_2">
                <button>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_2;
