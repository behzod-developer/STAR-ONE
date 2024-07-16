import React from 'react'
import './Question_and_aswer.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import ToggleCard from '../../../container/ToggleCard/ToggleCard';
import { useTranslation } from 'react-i18next';

function Question_and_answer() {

    const {t} = useTranslation()

    return (
        <div className='question_and_answer'>
            <div className="question_and_answer-container">
                <div className="question-card">
                    <h4>{t('landing_question_1')}</h4>
                    <MdKeyboardArrowDown />
                </div>
                <div className="question-card">
                    <h4>{t('landing_question_2')}</h4>
                    <MdKeyboardArrowDown />
                </div>
                <div className="question-card">
                    <h4>{t('landing_question_3')}</h4>
                    <MdKeyboardArrowDown />
                </div>
                <div className="question-card">
                    <h4>{t('landing_question_4')}</h4>
                    <MdKeyboardArrowDown />
                </div>
            </div>
        </div>
    )
}

export default Question_and_answer