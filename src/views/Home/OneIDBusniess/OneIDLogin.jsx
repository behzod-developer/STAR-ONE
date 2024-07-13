import React, { useState } from 'react'
import './OneIDLogin.css'
import Question_and_answer from '../question_and_answer/Question_and_answer'
import Footer from '../../../component/Footer/Footer'

function OneIDLogin() {
    
    const [oneIdData, setOneIdData] = useState()

    const addOneIdHandler = e => {
        e.preventDefault()
        const oneIdValue = new FormData(e.target)
        const newOneIdData = Object.fromEntries(oneIdValue.entries())

        setOneIdData(newOneIdData)

        
    }

    console.log(oneIdData)

    return (
        <div className='one-id-login-container'>
            <div className="dot-star-1 dot-star"></div>
            <div className="dot-star-2 dot-star"></div>
            <div className="dot-star-3 dot-star"></div>
            <div className="dot-star-4 dot-star"></div>
            <div className="dot-star-5 dot-star"></div>
            <div className="one-id-login">
                <form onSubmit={addOneIdHandler} action="">
                    <h3>Добро пожаловать <br />
                        в 1ID Business!</h3>
                    <p>Если у вас остались вопросы или вам нужна дополнительная информация, не стесняйтесь обращаться! Наша служба поддержки всегда готова помочь вам. Мы ценим ваш интерес к нашей платформе и стремимся обеспечить вас наилучшим опытом. Вместе мы создаем успешное сотрудничество!</p>
                    <input required placeholder='Имя' name='userName' type="text" />
                    <input required placeholder='Номер телефона' name='phoneNumber' type="tel" />
                    <button>Отправить</button>
                </form>
            </div>
            <Question_and_answer />
            <Footer />
        </div>
    )
}

export default OneIDLogin