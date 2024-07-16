import React, { useState } from 'react'
import './OneIDLogin.css'
import Question_and_answer from '../question_and_answer/Question_and_answer'
import Footer from '../../../component/Footer/Footer'
import { useTranslation } from 'react-i18next'

function OneIDLogin() {
    
    const [oneIdData, setOneIdData] = useState()
    const {t} = useTranslation()

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
                    <h3>{t('landing_header_request')}</h3>
                    <p>{t('landing_request_info')}</p>
                    <input required placeholder={t('landing_request_1')} name='userName' type="text" />
                    <div className="one-id-login-first">
                    <span>+998</span>
                    <input required placeholder={t('landing_request_2')} name='phoneNumber' type="tel" />
                    </div>
                    <button>{t('landing_request_3')}</button>
                </form>
            </div>
            <Question_and_answer />
            <Footer />
        </div>
    )
}

export default OneIDLogin