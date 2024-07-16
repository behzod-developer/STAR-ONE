import React from 'react'
import OneID_border from './OneID_border'
import './OneID.css'
import { useTranslation } from 'react-i18next'

function OneID() {
    const { t } = useTranslation()

    const jsonData = {
        message1: t('landing_1id_info'),
        message2: t('landing_1id_info2')
    };

    // Split the message by newline character and map to create line breaks
    const messageWithLineBreaks = jsonData.message1.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    // Split the message by newline character and map to create line breaks
    const messageWithLineBreaks2 = jsonData.message2.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className='one-id'>
            <div className="one-id-text">
                <h3>{t('landing_header_1id')}</h3>
                <p className='one-text'>{messageWithLineBreaks}</p>
                <p className='one-text'>{messageWithLineBreaks2}</p>
            </div>
            <div className="one-id-container">
                <OneID_border />
            </div>
        </div>
    )
}

export default OneID