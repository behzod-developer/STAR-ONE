import React from 'react'
import './Question_and_aswer.css'
import { MdKeyboardArrowDown } from "react-icons/md";

function Question_and_answer() {
    return (
        <div className='question_and_answer'>
            <div className="question_and_answer-container">
                <div className="question-card">
                    <h4>Как начать продавать на StarOne?</h4>
                    <MdKeyboardArrowDown />
                </div>
                <div className="question-card">
                    <h4>Сколько будет идти проверка?</h4>
                    <MdKeyboardArrowDown />
                </div>
                <div className="question-card">
                    <h4>Можно ли подключить второй магазин?</h4>
                    <MdKeyboardArrowDown />
                </div>
                <div className="question-card">
                    <h4>Как работает доставка StarOne?</h4>
                    <MdKeyboardArrowDown />
                </div>
            </div>
        </div>
    )
}

export default Question_and_answer