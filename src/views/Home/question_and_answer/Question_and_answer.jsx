import React from 'react'
import './Question_and_aswer.css'
import { useTranslation } from 'react-i18next';
import AccordionUsage from '../../../container/ToggleCard/ToggleCard';

function Question_and_answer() {

    const {t} = useTranslation()

    return (
        <div className='question_and_answer'>
            <div className="question_and_answer-container">
                {/* <div className="question-card">
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
                </div> */}

                <AccordionUsage />
            </div>
        </div>
    )
}

export default Question_and_answer