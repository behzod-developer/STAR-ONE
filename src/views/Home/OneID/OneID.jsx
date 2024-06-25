import React from 'react'
import OneID_border from './OneID_border'
import './OneID.css'

function OneID() {
    return (
        <div className='one-id'>
            <div className="one-id-text">
                <h3>Уникальные возможности с единой экосистемой 1ID</h3>
                <p className='one-text'>Эта единая экосистема создана для упрощения вашего онлайн-опыта и обеспечивает <br /> централизованный контроль над вашими идентификационными данными.</p>
                <p className='one-text'>Единая экосистема 1ID предоставляет уникальные возможности для управления вашим <br /> онлайн-присутствием:</p>
            </div>
            <div className="one-id-container">
                <OneID_border />
            </div>
        </div>
    )
}

export default OneID