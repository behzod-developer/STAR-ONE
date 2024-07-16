import React from "react";
import "./Section_3.css";
import macbook from "../../../assets/MacBook-Pro-16.png";
import { FaFileAlt } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Section_3() {

  const {t} = useTranslation()

  return (
    <div className="section_3-container">
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
          <div className="section_3-shag-text">
            <div className="section_3-div">
              <h3>{t('landing_step_1')}</h3>
              <p>
                <b>{t('landing_step_info_1_bold')}</b> {t('landing_step_info_1')}
              </p>
            </div>
            <div className="section_3-div">
              <h3>{t('landing_step_2')}</h3>
              <p>
                <b> {t('landing_step_info_2_bold')} </b>{t('landing_step_info_3')}
              </p>
            </div>
            <div className="section_3-div">
              <h3>{t('landing_step_3')}</h3>
              <p>
                <b>{t('landing_step_info_3_bold')}</b> {t('landing_step_info_3')}
              </p>
            </div>
            <div className="section_3-div">
              <h3>{t('landing_step_4')}</h3>
              <p>
                <b>{t('landing_step_info_4_bold')}</b> {t('landing_step_info_4')}
              </p>
            </div>
            <div className="section_3-div">
              <h3>{t('landing_step_5')}</h3>
              <p>
                <b>{t('landing_step_info_5_bold')}</b> {t('landing_step_info_5')}
              </p>
            </div>
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
