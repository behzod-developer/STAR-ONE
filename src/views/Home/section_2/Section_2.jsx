import React from "react";
import "./Section_2.css";
import statistica from "../../../assets/Vector 9.png";
import progress from "../../../assets/tabler_chart-pie-filled.png";
import { VscTriangleDown } from "react-icons/vsc";
import { ImArrowUp } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Section_2() {

  const { t } = useTranslation()

  const jsonData = {
    message: t('landing_option_5')
  };

  // Split the message by newline character and map to create line breaks
  const messageWithLineBreaks = jsonData.message.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="section_2-container">
      <div className="section_2-parent section_2-between">
        <div className="section_2-parent section_2-gap">
          <div className="section_2-line"></div>
          <div className="section_2-header-text">
            <h2>
              {t('landing_header_option_1')}
            </h2>
          </div>
        </div>
        <div className="section_2-header-text-2">
          <p>
            {t('landing_header_option_2')}
          </p>
        </div>
      </div>

      <div className="section_2-statistic">
        <div className="section_2-left-box">
          <h4>{t('landing_option_1')}</h4>
          <p>
            {t('landing_option_info_1')}
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
              <h3>{t('landing_option_2')}</h3>
              <p>{t('landing_option_info_2')}</p>
              <div>
                <ImArrowUp className="narrow" />
                <b>100%</b>
              </div>
            </div>
            <div className="section_2-back-box_2">
              <h3>{t('landing_option_3')}</h3>
              <p>{t('landing_option_info_3')}</p>
              <img src={statistica} alt="img" />
            </div>
          </div>
          <div className="section_2-back-bottom">
            <div className="section_2-back-box_3">
              <h3>{t('landing_option_4')}</h3>
              <p>{t('landing_option_info_4')}</p>
              <div className="section_2-bottom-dot-line">
                <div className="section_2-bottom-cyrcle"></div>
                <div className="section_2-dot-1"></div>
                <div className="section_2-bottom-cyrcle-2">
                  <BiLike />
                </div>
              </div>
            </div>

            <div className="section_2-back-box_4">
              <h3>{messageWithLineBreaks}</h3>
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
